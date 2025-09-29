# Public Assets

All Figma-exported images used by the app are copied into this folder at `public/assets`.

- Source: `../../assets/figmaimages/`
- Destination: `public/assets/`
- Access pattern in code: `/assets/<filename>.png`

This ensures components like `OurSolutionSkilltest` can reference images using public paths, e.g.:
- `/assets/figma_image_2218_5203.png`
- `/assets/figma_image_2218_5332.png`
- `/assets/figma_image_2218_5346.png`
- `/assets/figma_image_2218_5353.png`
- `/assets/figma_image_2218_5405.png`
- `/assets/figma_image_2218_5285.png`
- `/assets/figma_image_2218_5339.png`
- `/assets/figma_image_2218_5342.png`
- `/assets/figma_image_2218_5343.png`
- `/assets/figma_image_2218_5344.png`

If new images are added to `assets/figmaimages/`, copy them again into `public/assets`.
