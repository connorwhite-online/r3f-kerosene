# r3f-kerosene

This is a booster pack for getting react-three-fiber projects off the ground using Three.js and React.

## Modularity

A lightweight jump-start for previously modeled geometries and scenes, the framework is meant to be sparse.

### GLTF > JSX

Export a .gltf or .glb file from Blender, C4D, Maya, CLO, Fusion360 etc. To create a reusable .jsx component from your scene/model you can drag and drop the .gltf into https://gltf.pmnd.rs/ and copy/paste the code into a new component.

### Textures

For ideal GLTF texture exports to three.js refer to your specific programs documentation, like Blender's (https://docs.blender.org/manual/en/2.80/addons/io_scene_gltf2.html#). Some textures may need to be baked to show up in three.js so if your scene/model looks unsatisfactory, this is probably the case.