# Production Tools

## Digital Audio Basics

- [Audio Setup](./audio)
- [How to Use Pure Data (Pd)](https://www.634nakajima.com/device-exercise-2/ja/lessons/lesson03.html)

## Sensors, Actuators & Arduino

### Input, Processing, and Output in Interactive Art

Interactive artworks are fundamentally composed of the following three elements:

1. **Input (Sensing)** --- Detecting the experiencer's actions or changes in the environment. Handled by sensors
2. **Processing** --- Calculating and deciding what output to produce based on the input. Handled by Arduino or PC
3. **Output (Actuation)** --- Expressing the computation results as physical movement, sound, light, etc. Handled by actuators

**Arduino** is a microcontroller board for reading sensor input and controlling actuators. Through programming, you can freely design "what input triggers what output." It is relatively easy to use even without electronics experience, making it widely used in interactive art production.

### Various Actuators

Actuators are devices that convert electrical signals into physical movement or force. They serve as the "output" of artworks.

| Actuator | Movement | Example Use in Artworks |
|----------|----------|------------------------|
| **DC Motor** | Continuous shaft rotation | Spinning propellers, rotating objects |
| **Servo Motor** | Rotates to a specified angle and stops | Moving arms or heads to specific angles, opening/closing valves |
| **Stepper Motor** | Rotates precisely by specified steps (angles) | Precise positioning, clock hands, CNC/plotter drives |
| **Solenoid** | Shaft pushes out / pulls in linearly | Striking objects, releasing locks |
| **DC Fan** | Blades rotate to create airflow | Wind effects, creating air currents |
| **Vibration Motor** | The body vibrates | Tactile feedback, vibration notifications |
| **Speaker** | Diaphragm vibrates to produce sound | Acoustic expression, sound effect playback |
| **LED** | Emits light | Lighting effects, status display |

### Various Sensors

Sensors are devices that convert physical phenomena (force, distance, temperature, etc.) into electrical signals. They serve as the "input," detecting the experiencer's actions and environmental changes.

| Sensor | What It Detects | Example Use in Artworks |
|--------|----------------|------------------------|
| **Pressure Sensor** | Pressing force intensity | Detecting stepping, gripping, pressing operations |
| **Distance Sensor** | Distance to target object | Detecting hand/body approach, touchless operation |
| **Piezo Element** | Vibration / impact | Detecting tapping/plucking actions, contact detection |
| **Accelerometer** | Tilt / acceleration of movement | Detecting shaking/tilting, gesture recognition |
| **Tilt Sensor** | Whether it is tilted | Object posture changes |
| **Temperature/Humidity Sensor** | Temperature and humidity | Environment-responsive effects |
| **Water Level Sensor** | Water surface height | Water-based interactions |
| **Touch Sensor** | Whether someone touched it | Artworks that respond to touch |
| **Flex Sensor** | Degree of bending | Bending/flexing operations |

### Various Mechanisms

Mechanisms are systems for converting sensor and actuator movements into desired movements.

| Mechanism | Features | Movement Image |
|-----------|----------|----------------|
| **Linkage** | Multiple bars (links) connected by pins to transmit motion | Converting rotational motion -> reciprocating motion, etc. |
| **Gear** | Meshing gears transmit rotation | Speed conversion, direction reversal |
| **Pulley** | Belts and pulleys transmit rotation to distant locations | Power transmission to remote positions |
| **Cam** | A rotating plate's shape creates reciprocating motion | Converting rotation -> up-and-down motion |

### Circuit Boards & Cables

Components for connecting sensors and actuators to Arduino. Using a breadboard (a soldering-free prototyping board) makes it easy to experiment with wiring. When raising the quality of a finished work, solder connections onto a universal board for secure attachment.

## Interface Fabrication

- Enclosures for mounting sensors and actuators
- 3D printers, specialty filaments
- Image engraving with laser cutters
  - ATOMSTACK A5 PRO, LightBurn (lab-owned laser cutter)
- Mayku FormBox (vacuum forming)
- Silicone mold making

## Programming & Development Environments

| Tool | Overview | Best Suited For |
|------|----------|----------------|
| **Processing** | A Java-based visual programming environment. Code immediately produces graphics and animations, allowing beginners to learn with visual feedback | 2D/3D graphics, generative art, data visualization |
| **p5.js** | The JavaScript version of Processing. Runs in web browsers, allowing works to be shared via URL or embedded in websites | Web-based interactive works, browser-based visual expression |
| **Unity** | A game engine. Excels at building 3D spaces, physics simulation, and VR/AR content creation | VR/AR works, 3D interactive spaces, game-like experiences |
| **Python** | A general-purpose programming language. Rich library ecosystem covering data analysis, machine learning, image processing, server construction, and more | Data analysis/visualization, machine learning, sensor data processing, automation scripts |
| **TouchDesigner** | A node-based visual programming environment. Design video, audio, and data flows visually by connecting nodes (boxes) with wires. Extremely strong at real-time processing | Projection mapping, real-time video effects, sensor input-video integration, OSC/MIDI communication |
| **Teachable Machine** | A web-based machine learning tool provided by Google. Easily create image, audio, and pose recognition models in the browser. No programming required | Simple machine learning applications such as "recognizing specific gestures and responding" |
| **MediaPipe** | A machine learning framework provided by Google. Detects hand, face, and body landmarks (joint positions, etc.) in real-time | Using hand movements, facial expressions, and body posture for sensing and interaction |
