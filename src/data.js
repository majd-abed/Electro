import { AiOutlineHome } from "react-icons/ai";
import { FaMedapps } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { VscFlame } from "react-icons/vsc";
import { GrDropbox } from 'react-icons/gr';
import { ProductDropdown } from "./components/ProductDropdown";


export const linksData = [
  {
    id: 1,
    name: "Home",
    icon: <AiOutlineHome />,
    url: "/",
  },
  {
    id: 2,
    name: 'Products',
    icon: <BsBoxSeam />,
    component: <ProductDropdown />,
  },
  {
    id: 3,
    name: "About",
    icon: <FaMedapps />,
    url: "/about",
  },
]

export const colors = [
  'All','white', 'black', 'gray', 'red'
]

export const categoryData = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'Mice',
  },
  {
    id: 3,
    name: 'Keyboards',
  },
  {
    id: 4,
    name: 'Headsets',
  },
]

export const dropDownData = [
  {
    id: 1,
    name: 'Top Products',
    icon: <VscFlame className="-mr-[0.12rem]" />,
    url: '/discover'
  },
  {
    id: 2,
    name: 'All products',
    icon: <GrDropbox />,
    url: '/allproducts'

  },
]

export const WarrantyData = [
  {
    svg: <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 490.667 490.667"
      version="1.1"
      viewBox="0 0 490.667 490.667"
      xmlSpace="preserve"
      className=" h-28 w-full p-4 fill-gray-50 py-2 "
    >
      <path d="M138.667 192H96c-5.888 0-10.667 4.779-10.667 10.667V288c0 5.888 4.779 10.667 10.667 10.667s10.667-4.779 10.667-10.667v-74.667h32c5.888 0 10.667-4.779 10.667-10.667S144.555 192 138.667 192z"></path>
      <path d="M117.333 234.667H96c-5.888 0-10.667 4.779-10.667 10.667S90.112 256 96 256h21.333c5.888 0 10.667-4.779 10.667-10.667s-4.779-10.666-10.667-10.666z"></path>
      <path d="M245.333 0C110.059 0 0 110.059 0 245.333s110.059 245.333 245.333 245.333 245.333-110.059 245.333-245.333S380.608 0 245.333 0zm0 469.333c-123.52 0-224-100.48-224-224s100.48-224 224-224 224 100.48 224 224-100.48 224-224 224z"></path>
      <path d="M386.752 131.989C352.085 88.789 300.544 64 245.333 64s-106.752 24.789-141.419 67.989c-3.691 4.587-2.965 11.307 1.643 14.997 4.587 3.691 11.307 2.965 14.976-1.643 30.613-38.144 76.096-60.011 124.8-60.011s94.187 21.867 124.779 60.011a10.658 10.658 0 008.32 3.989c2.368 0 4.715-.768 6.677-2.347 4.608-3.689 5.334-10.409 1.643-14.996zM376.405 354.923c-4.224-4.032-11.008-3.861-15.061.405-30.613 32.235-71.808 50.005-116.011 50.005s-85.397-17.771-115.989-50.005c-4.032-4.309-10.816-4.437-15.061-.405-4.309 4.053-4.459 10.816-.405 15.083 34.667 36.544 81.344 56.661 131.456 56.661s96.789-20.117 131.477-56.661c4.053-4.267 3.882-11.03-.406-15.083zM206.805 255.723c15.701-2.027 27.861-15.488 27.861-31.723 0-17.643-14.357-32-32-32h-21.333c-5.888 0-10.667 4.779-10.667 10.667V288c0 5.888 4.779 10.667 10.667 10.667S192 293.888 192 288v-16.917l24.448 24.469a10.716 10.716 0 007.552 3.115c2.731 0 5.461-1.045 7.531-3.136 4.16-4.16 4.16-10.923 0-15.083l-24.726-24.725zM192 234.667v-21.333h10.667c5.867 0 10.667 4.779 10.667 10.667s-4.8 10.667-10.667 10.667H192zM309.333 277.333h-32v-64h32c5.888 0 10.667-4.779 10.667-10.667S315.221 192 309.333 192h-42.667c-5.888 0-10.667 4.779-10.667 10.667V288c0 5.888 4.779 10.667 10.667 10.667h42.667c5.888 0 10.667-4.779 10.667-10.667s-4.779-10.667-10.667-10.667z"></path>
      <path d="M288 234.667h-21.333c-5.888 0-10.667 4.779-10.667 10.667S260.779 256 266.667 256H288c5.888 0 10.667-4.779 10.667-10.667s-4.779-10.666-10.667-10.666zM394.667 277.333h-32v-64h32c5.888 0 10.667-4.779 10.667-10.667S400.555 192 394.667 192H352c-5.888 0-10.667 4.779-10.667 10.667V288c0 5.888 4.779 10.667 10.667 10.667h42.667c5.888 0 10.667-4.779 10.667-10.667s-4.779-10.667-10.667-10.667z"></path>
      <path d="M373.333 234.667H352c-5.888 0-10.667 4.779-10.667 10.667S346.112 256 352 256h21.333c5.888 0 10.667-4.779 10.667-10.667s-4.779-10.666-10.667-10.666z"></path>
    </svg>,
    title: 'Free Shipping',
    text: 'Totally free shipping to all countries',
  },
  {
    svg: <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      className=" h-28 w-full p-4 fill-gray-50 py-2 "
    >
      <path d="M476.158 231.363l-13.259-53.035c3.625-.77 6.345-3.986 6.345-7.839v-8.551c0-18.566-15.105-33.67-33.67-33.67h-60.392V110.63c0-9.136-7.432-16.568-16.568-16.568H50.772c-9.136 0-16.568 7.432-16.568 16.568V256a8.017 8.017 0 0016.034 0V110.63c0-.295.239-.534.534-.534h307.841c.295 0 .534.239.534.534v145.372a8.017 8.017 0 0016.034 0v-9.088h94.569l.021.002.022-.001c11.637.008 21.518 7.646 24.912 18.171h-24.928a8.017 8.017 0 00-8.017 8.017v17.102c0 13.851 11.268 25.119 25.119 25.119h9.086v35.273h-20.962c-6.886-19.883-25.787-34.205-47.982-34.205s-41.097 14.322-47.982 34.205h-3.86v-60.393a8.017 8.017 0 00-16.034 0v60.391H192.817c-6.886-19.883-25.787-34.205-47.982-34.205s-41.097 14.322-47.982 34.205H50.772a.534.534 0 01-.534-.534v-17.637h34.739a8.017 8.017 0 000-16.034H8.017a8.017 8.017 0 000 16.034h26.188v17.637c0 9.136 7.432 16.568 16.568 16.568h43.304c-.002.178-.014.355-.014.534 0 27.996 22.777 50.772 50.772 50.772s50.772-22.776 50.772-50.772c0-.18-.012-.356-.014-.534h180.67c-.002.178-.014.355-.014.534 0 27.996 22.777 50.772 50.772 50.772 27.995 0 50.772-22.776 50.772-50.772 0-.18-.012-.356-.014-.534h26.203a8.017 8.017 0 008.017-8.017v-85.511c.001-21.112-15.576-38.653-35.841-41.738zm-100.976-87.062h60.392c9.725 0 17.637 7.912 17.637 17.637v.534h-78.029v-18.171zm0 86.58v-52.376h71.235l13.094 52.376h-84.329zM144.835 401.904c-19.155 0-34.739-15.583-34.739-34.739s15.584-34.739 34.739-34.739c19.155 0 34.739 15.583 34.739 34.739s-15.584 34.739-34.739 34.739zm282.188 0c-19.155 0-34.739-15.583-34.739-34.739s15.584-34.739 34.739-34.739c19.155 0 34.739 15.583 34.739 34.739s-15.584 34.739-34.739 34.739zm68.944-102.614h-9.086c-5.01 0-9.086-4.076-9.086-9.086v-9.086h18.171v18.172z"></path>
      <path d="M144.835 350.597c-9.136 0-16.568 7.432-16.568 16.568 0 9.136 7.432 16.568 16.568 16.568 9.136 0 16.568-7.432 16.568-16.568 0-9.136-7.432-16.568-16.568-16.568zM427.023 350.597c-9.136 0-16.568 7.432-16.568 16.568 0 9.136 7.432 16.568 16.568 16.568 9.136 0 16.568-7.432 16.568-16.568 0-9.136-7.432-16.568-16.568-16.568zM332.96 316.393H213.244a8.017 8.017 0 000 16.034H332.96a8.017 8.017 0 000-16.034zM127.733 282.188H25.119a8.017 8.017 0 000 16.034h102.614a8.017 8.017 0 000-16.034zM278.771 173.37a8.017 8.017 0 00-11.337.001l-71.292 71.291-37.087-37.087a8.016 8.016 0 00-11.337 0 8.016 8.016 0 000 11.337l42.756 42.756c1.565 1.566 3.617 2.348 5.668 2.348s4.104-.782 5.668-2.348l76.96-76.96a8.018 8.018 0 00.001-11.338z"></path>
    </svg>,
    title: 'Fast Delivery',
    text: 'The fastest delivery service around the globe',
  },
  {
    svg: <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      className=" h-28 w-full p-4 fill-gray-50 py-2 "
    >
      <g>
        <path d="M252.92 300H256a124.245 124.245 0 10-4.49-.09c.075.009.15.023.226.03.394.039.789.06 1.184.06zM156 176a100 100 0 11100 100 100.113 100.113 0 01-100-100z"></path>
        <path d="M447.445 387.635l-80.4-80.4A171.682 171.682 0 00428 176C428 81.159 350.841 4 256 4S84 81.159 84 176c0 73.747 46.657 136.794 112 161.2V496c-.3 9.289 11.094 15.384 18.656 9.984L256 478.422l41.344 27.562c7.574 5.4 18.949-.7 18.656-9.984v-70.109l46.6 46.594c6.395 6.789 18.712 3.025 20.253-6.132l9.74-48.724 48.725-9.742c9.163-1.531 12.904-13.893 6.127-20.252zM108 176c0-81.607 66.393-148 148-148s148 66.393 148 148-66.393 148-148 148-148-66.393-148-148zm154.656 278.016a12 12 0 00-13.312 0L220 473.578V344.2a172.338 172.338 0 0072 0v129.38zm117.381-58.353a12 12 0 00-9.415 9.415l-6.913 34.58L316 391.949V337.2a171.469 171.469 0 0031.467-15.6l67.151 67.152z"></path>
        <path d="M287.62 236.985c8.349 4.694 19.251-3.212 17.367-12.618l-5.841-35.145 25.384-25c7.049-6.5 2.89-19.3-6.634-20.415l-35.23-5.306-15.933-31.867c-4.009-8.713-17.457-8.711-21.466 0L229.334 138.5l-35.23 5.306c-9.526 1.119-13.681 13.911-6.634 20.415l25.384 25-5.841 35.145c-1.879 9.406 9 17.31 17.367 12.618L256 220.57zm-53-32.359l2.928-17.615a12 12 0 00-3.417-10.516l-12.721-12.531 17.658-2.66a12 12 0 008.947-6.5L256 138.833l7.985 15.972a12 12 0 008.947 6.5l17.658 2.66-12.723 12.535a12 12 0 00-3.417 10.516l2.928 17.615-15.849-8.231a12 12 0 00-11.058 0z"></path>
      </g>
    </svg>,
    title: 'High Quality',
    text: 'Chosen by top gaming professionals',
  }
]

export const aboutItem = [
  //Headphones
  {
    name: 'Logitech G435',
    id: 'prod_0YnEoqvOVN5e7P',
    colors: ['white'],
    about: [
      'Total comfort: Breathable fabric earcups keep your ears cool during long play sessions, and the comfortable memory foam padding helps absorb sound waves to improve overall sound',
      'Versatile: Logitech G435 is the first headset with LIGHTSPEED wireless and low latency Bluetooth connectivity, providing more freedom of play on PC, smartphones, PlayStation and Nintendo Switch gaming devices',
      'Lightweight: With a lightweight construction, this wireless gaming headset weighs only 5.8 oz (165 g), making it comfortable to wear all day long',
      'Superior voice quality: Be heard loud and clear thanks to the built-in dual beamforming microphones that eliminate the need for a mic arm and reduce background noise',
      'Immersive sound: This cool and colorful headset delivers carefully balanced, high-fidelity audio with 40 mm drivers; compatibility with Dolby Atmos, Windows Sonic for a true surround sound experience',
      'Long battery life: No need to stop the game to recharge thanks to G435\'s 18 hours of battery life, allowing you to keep playing, talking to friends, and listening to music all day',
    ]
  },
  {
    name: 'HyperX Cloud Stinger',
    id: 'prod_kd6Ll2ABNE5V2m',
    colors: ['black'],
    about: [
      'Lightweight headset (275 gram) with 90-degree rotating ear cups provide a snug fit that conforms to your head',
      '50 millimeter directional drivers for audio precision — enjoy the full audioscape of your favorite games',
      'HyperX signature memory foam provides maximum comfort during extended use',
      'Adjustable steel slider for a solid and long lasting sturdy feel',
      'Intuitive volume control on headset ear cup',
      'Swivel-to-mute noise-cancellation microphone so you’ll always know when you’re muted',
      'Multi-platform compatibility: PC, PS4, Xbox One, Nintendo Switch and more',
      'Refer user guide on technical specification before use',
    ],
  },
  {
    name: 'Donerton Gaming Headset',
    id: 'prod_4OANwRzj4YwvYL',
    colors: ['black'],
    about: [
      'surrounding stereo sound: Donerton gaming headset offers 50 mm audio drivers in combination with advanced audio technology. It delivers high quality simulated surround sound to make the gaming experience even more intense. sith the responsive audio drivers, you can better see the direction the sound is coming from, such as gunfire, footsteps, even breathing.',
      'noise isolating microphone: Donerton gaming headphones with a 120 degree rotating noise canceling microphone that is ergonomically designed. Donerton xbox one headsets filters out of the ambient noise in your area and enables real time conversations without delay. you can be heard in relatively noisy environments without having to repeat yourself.',
      'multi platform compatibility: Donerton pc game headset supports ps4, ps4 pro slim, psp, pc, laptop, tablet, mobile phone and other devices with 3.5 mm audio jack. note: ps3 and xbox one s need an additional adapter(not included) to support. usb interface is used for led lights only.',
    ]
  },
  {
    name: 'Razer BlackShark V2',
    id: 'prod_VPvL5zWQDKlAQk',
    colors: ['black'],
    about: [
      'The #1 Best-Selling Gaming Peripherals Brand: Source - The NPD Group, Inc. U.S. Retail Tracking Service: Gaming Keyboards, Gaming Mice, Gaming Headsets, Gaming Peripherals; Based on dollar sales, Jan-Sept. 2021 combined',
      'THX 7.1 Surround Sound Capable: Provides industry-leading audio realism for in-game immersion by providing accurate spatial audio information beyond standard 7.1 surround sound directional cues',
      'Triforce Titanium 50mm High-End Sound Drivers: Outfitted with cutting-edge, 50mm drivers divided into 3 parts for individual tuning of highs, mids, and lows',
      'All-Day Comfort: Oval, cooling gel-infused cushions that prevent overheating and pressure build-up',
      'Detachable Razer Hyperclear Cardioid Mic: Tuned to have a more focused voice pickup area, get the most out of the mic with a with advanced voice tweaking options via Razer Synapse 3',
      'Compatibility: Audio enhancer DAC connects via USB connector; THX Spatial Audio available on Windows 10 64-bit only',

    ]
  },
  //Mice
  {
    name: 'Razer Basilisk X',
    id: 'prod_Op1YoVxOMMlXLv',
    colors: ['black'],
    about: [
      '25% Faster Than Competing Wireless Mice: The all-new, Razer HyperSpeed wireless technology brings together extreme low-latency and interference reduction for true wireless freedom',
      'Dual Mode Connectivity: Supports Bluetooth for efficient power consumption and HyperSpeed Wireless for lag-free gaming.Max Acceleration (G):40',
      '6 Programmable Buttons: Allows for reconfiguration and assignment of complex macro functions through Razer Synapse 3',
      'Up to 450 Hr Battery Life: Lasts 450 hours on Bluetooth, 285 hours on HyperSpeed Wireless',
      'Durable Mechanical Switches: Supports up to 50 million clicks, backed by a 2 year warranty',
    ]
  },
  {
    name: 'Logitech G305',
    id: 'prod_G6kVw7pgPdo2eD',
    colors: ['black', 'white', 'gray'],
    about: [
      'HERO Gaming Sensor: Next-gen HERO mouse sensor delivers up to 10x the power efficiency over other gaming mice with exceptional accuracy and responsiveness thanks to 400 IPS precision and up to 12000 DPI sensitivity',
      'LIGHTSPEED Wireless: Ultra-fast LIGHTSPEED Wireless technology gives you a lag-free gaming experience. The G305 wireless gaming mouse delivers incredible responsiveness and reliability with a super-fast 1ms report rate for competition-level performance',
      'Ultra-Long Battery Life: The G305 wireless Logitech mouse boasts an incredible 250 hours of continuous gameplay on a single AA battery so you can play at peak performance without worrying about running out of power',
      'Lightweight design: Thanks to an efficient mechanical design, the G305 gaming mouse weighs in at only 99 grams for high manoeuvrability',
    ]
  },
  {
    name: 'Redragon M602',
    id: 'prod_0egY5eKOX2w3Qn',
    colors: ['black'],
    about: [
      'WIRED GAMING MOUSE; built for Gaming Computers - Ergonomic Redragon M602-RGB “Griffin” RGB Backlit Gaming PC Mouse up to 7200 DPI (user adjustable 800/1200/1600/2400/7200 DPI), 10G acceleration. The High-Precision Sensor delivers Pinpoint Accuracy while the Gaming Grade Micro Switches ensure longevity, greater durability and extreme responsiveness, giving you an even greater edge over your competition',
      'RGB BACKLIT MMO PROGRAMMABLE PC GAMING MOUSE; 7 MMO user programmable buttons, 5 Memory Profiles each with distinct LED color option for quick identification. 7 different backlight modes. (Backlight can be disabled) The Redragon M602-RGB Gaming Mouse offers you total personalization for your Gaming Computer and Gaming Laptop',
      'ERGONOMIC GAMER MOUSE; Delivering an extremely comfortable and precise experience for Computer Games. The ergonomic shape of the Redragon M602-RGB PC Gaming Mouse is built for comfort, fits naturally in your hand, the buttons are tuned to reduce click fatigue',
    ]
  },
  {
    name: 'HP M280',
    id: 'prod_8XxzoByJeZwPQA',
    colors: ['black', 'white', 'gray'],
    about: [
      'Brand: HP',
      'Connectivity: USB',
      'Compatible with: PC and Laptop',
    ]
  },
  //Keyboards
  {
    name: 'Logitech G915 TKL',
    id: 'prod_7ZAMo1JxNv5NJ4',
    colors: ['black', 'white'],
    about: [
      'Wireless Gaming Gear Brand - Based on independent aggregated sales data (FEB ‘19 - FEB’20) of Wireless Gaming Keyboard, Mice, and PC Headset in units from: US, CA, CN, JP, KR, TW, TH, ID, DE, FR, RU, UK, SE, TR',
      'Lightspeed wireless delivers pro-grade performance with flexibility and freedom from cords. Creates a clean aesthetic for battle stations. Delivers 40 hours on a single full charge.',
      'Lightsync technology provides RGB lighting that synchronizes lighting with any content. Personalize each key or create custom animations from about 16.8M colors with Logitech G HUB software.',
      'Low Profile mechanical switches offers the speed, accuracy and performance of a mechanical switch at half the height The GL Clicky switch features a distinctive sound and tactile feedback. Comes in 3 options: GL Tactile, GL Linear or GL Clicky.',
      'Ten keyless design provides more room for mouse movement. Store the USB receiver in the back of the keyboard for additional portability.',
    ]
  },
  {
    name: 'Logitech G910 Orion Spectrum',
    id: 'prod_r2LM5QzM4alZV1',
    colors: ['black'],
    about: [
      'Exclusive Romer-G Mechanical Switches Exclusive Romer-G mechanical switches make Orion Spectrum our fastest keyboard ever. 1. 5mm actuation makes it possible for Orion Spectrum to receive input up to 25 percent faster than leading competitors, with 40 percent more durability at 70 million keystrokes.',
      'Intelligent RGB Illumination Customize Orion Spectrum’s RGB illumination from a palette of up to 16 million colors. Customize key illumination for specific games or game events. Each key top is entirely illuminated with 16MM color lighting for a beautiful, evenly lit glow.',
      'Arx Control Integration Smartphones and tablets can be connected to Orion Spectrum using the adjustable Smart Dock. Arx Control makes it possible for mobile devices to display in-game display information, vital system statistics and more.',
      '9 Customizable G-keys Orion Spectrum’s 9 fully-customizable G-keys can be assigned commands per profile, and have been positioned for optimal speed and accessibility.',

    ]
  },
  {
    name: 'ROCCAT Vulcan Pro',
    id: 'prod_NXELwjeOEml3A4',
    colors: ['black'],
    about: [
      'OPTICAL SPEED, TACTILE MECHANICAL FEEL - ROCCAT’s new tactile Titan Switch Optical actuates at the speed of light for a whole new level of speed and responsiveness, whilst retaining the signature keystroke feel of mechanical',
      'ADVANCED ANTI-GHOSTING - Technology optimized for gamers to ensure every key stroke of the most-used keys is registered – no matter how frantic the action gets',
      'AIMO ILLUMINATION - ROCCAT’s proprietary lighting eco-system connects compatible devices present vivid lighting scenarios right out of the box, without the need for extensive configuration; With full backlighting in 16.8 million colors',
      'MIXER-STYLE MEDIA CONTROLS - The volume dial and backlit media buttons allow you to adjust volume & mute on the fly, or toggle over to lighting control to adjust brightness',
      'CUSTOMIZED YOUR WAY - ROCCAT’s Easy-Shift[ plus] technology adds a secondary function to compatible keys; Just hold down the designated modifier key for double the command power in an instant',

    ]
  },
  {
    name: 'Redragon K552',
    id: 'prod_L1vOoZKjMM5Ra8',
    colors: ['black'],
    about: [
      '87 Key small compact TKL Mechanical Gaming Keyboard with Custom Switches (Cherry Brown equivalent) for longevity with greater durability and responsiveness offering medium resistance, quiet travel, precise tactile feedback good for typing and gaming',
      'LED Rainbow Backlit Mechanical Gaming Keyboard 19 different lighting modes plus 2 user programmable mode 6 different colors, 6 brightness levels, breathing speed Precision engineered keycaps offer crystal clear uniform backlighting',
      'Anti Ghosting, ALL 87 keys are conflict free n-Key Rollover for ultimate Gaming performance 12FN Multimedia keys Non-Slip Ergonomic splash-proof Design with adjustable typing angle, High-Speed USB cable with gold-plated corrosion free USB connector',
      'Compact 60% Mini Tenkeyless Ergonomic Designed Computer Keyboard Durable Metal-ABS Construction with Plate-mounted mechanical keys and switches that stand up during marathon FPS gaming sessions',
    ]
  },
]

export const people = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    image:
      './person-1-min.webp',
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    image:
      './person-2-min.webp',
    text:
      'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    image:
      './person-3-min.webp',
    text:
      'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    image:
      './person-4-min.webp',
    text:
      'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

