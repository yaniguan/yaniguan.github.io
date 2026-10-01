#!/usr/bin/env bash
# Shrink a .glb from an image-to-3D tool (Tripo, Meshy, Hunyuan3D, ...) into
# something small enough for the Places grid on /outside/, and drop it in
# assets/models/. Those tools hand back 5–30 MB with 2K–4K textures; a card
# that is 300px wide needs well under 1 MB.
#
#   bin/place-model.sh ~/Downloads/model.glb griffith-observatory
#
# then add an entry pointing at assets/models/griffith-observatory.glb to
# _data/places.yml. Needs Node (npx fetches @gltf-transform/cli on first run).
set -euo pipefail

if [ $# -ne 2 ]; then
  echo "usage: $0 <input.glb> <slug>" >&2
  exit 1
fi

in="$1"
out="$(cd "$(dirname "$0")/.." && pwd)/assets/models/$2.glb"

# optimize = dedup + weld + simplify + Draco geometry compression; textures
# are capped at 1024px and re-encoded as WebP. Not meshopt: <model-viewer>
# 4.0 fails to load gltf-transform's meshopt output ("reading 'scene'").
npx --yes @gltf-transform/cli optimize "$in" "$out" \
  --compress draco \
  --texture-compress webp \
  --texture-size 1024

ls -lh "$in" "$out"
