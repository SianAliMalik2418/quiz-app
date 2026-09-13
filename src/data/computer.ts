import type { Subject } from "@/lib/types";

export const computer: Subject = {
  id: "computer",
  title: "Computer",
  emoji: "💻",
  chapters: [
    {
      id: "ch1-emerging-technologies",
      title: "Chapter 1: Introduction to Emerging Technologies",
      questions: [
        {
          question: "What does the term \"emerging technology\" generally describe?",
          options: [
            "An old technology being removed",
            "A new technology, or the continuing development of an existing technology",
            "Only computer hardware",
            "A technology used only in offices",
          ],
          correctIndex: 1,
        },
        {
          question: "Emerging technologies mainly help to:",
          options: [
            "Decrease productivity",
            "Increase costs",
            "Make services more accessible and easier",
            "Remove all old machines",
          ],
          correctIndex: 2,
        },
        {
          question: "Who invented the first telephone (landline)?",
          options: ["D. H. Ring", "Charles Hull", "Alexander Graham Bell", "Elon Musk"],
          correctIndex: 2,
        },
        {
          question: "In which year was the first telephone invented?",
          options: ["1876", "1965", "1980", "1990"],
          correctIndex: 0,
        },
        {
          question: "By early 1877, what had been established because of the telephone?",
          options: ["Mobile phone networks", "Telephone lines", "The internet", "Wi-Fi networks"],
          correctIndex: 1,
        },
        {
          question: "Who invented the first cordless telephone?",
          options: ["Alexander Graham Bell", "D. H. Ring", "Charles Hull", "Honda engineers"],
          correctIndex: 1,
        },
        {
          question: "The first cordless telephone was developed and manufactured by:",
          options: ["Intel", "IBM", "Bell Labs", "Honda"],
          correctIndex: 2,
        },
        {
          question: "In which year was the first cordless telephone invented?",
          options: ["1876", "1965", "1980s", "1990s"],
          correctIndex: 1,
        },
        {
          question: "The mobile phone was introduced during the:",
          options: ["1870s", "1960s", "1980s", "1990s"],
          correctIndex: 2,
        },
        {
          question: "IBM's Simon, introduced in the 1990s, is considered:",
          options: ["The first cordless phone", "The first smartphone", "The first landline", "The first 3D printer"],
          correctIndex: 1,
        },
        {
          question: "According to the progression of technologies, the first generation computer processor was developed by Intel in:",
          options: ["1990", "2000", "2010", "2021"],
          correctIndex: 2,
        },
        {
          question: "The 12th generation processor, developed in 2021, is:",
          options: [
            "Slower than the first generation processor",
            "The same speed as the first generation processor",
            "Many times faster and superior to the first generation processor",
            "No longer used anywhere",
          ],
          correctIndex: 2,
        },
        {
          question: "Biometrics is the measurement of:",
          options: ["Computer speed", "Unique physical characteristics of a person", "Internet bandwidth", "Screen brightness"],
          correctIndex: 1,
        },
        {
          question: "Which of these is an example of a biometric characteristic?",
          options: ["Password", "Fingerprint", "Username", "PIN code"],
          correctIndex: 1,
        },
        {
          question: "Biometrics is often used at places like airports to:",
          options: ["Sell tickets", "Verify an individual's identity in high security places", "Print boarding passes", "Track flight delays"],
          correctIndex: 1,
        },
        {
          question: "What does CAT stand for in the context of translation software?",
          options: [
            "Computer Assisted Translation",
            "Central Automated Text",
            "Computer Automatic Typing",
            "Central Assisted Technology",
          ],
          correctIndex: 0,
        },
        {
          question: "CAT software divides written sentences into:",
          options: ["Pages", "Segments", "Paragraphs only", "Files"],
          correctIndex: 1,
        },
        {
          question: "How is CAT different from tools like Google Translate?",
          options: [
            "CAT does not translate text at all",
            "In CAT, the translated output is always reviewed and completed by human translators",
            "Google Translate is not available online",
            "CAT only works on images",
          ],
          correctIndex: 1,
        },
        {
          question: "Open source software is best described as:",
          options: [
            "Software that can never be modified",
            "Code that is designed to be used, modified, and distributed by the public",
            "Software only for government use",
            "Software with no source code at all",
          ],
          correctIndex: 1,
        },
        {
          question: "Which of these is an example of open source software mentioned in the chapter?",
          options: ["Mozilla Firefox", "Windows", "Adobe Photoshop", "MS Office"],
          correctIndex: 0,
        },
        {
          question: "Robotics is best described as a merger of:",
          options: ["Art and music", "Engineering, technology, and computer science", "History and geography", "Cooking and design"],
          correctIndex: 1,
        },
        {
          question: "The goal of robotics is to design machines that:",
          options: ["Replace all humans", "Help and assist humans", "Only work in factories", "Cannot be programmed"],
          correctIndex: 1,
        },
        {
          question: "Asimo, the humanoid robot shown in the chapter, was developed by:",
          options: ["Tesla", "Intel", "Honda", "IBM"],
          correctIndex: 2,
        },
        {
          question: "Peripheral devices of a computer system are mainly used to:",
          options: ["Only play music", "Enter information into a computer and deliver processed data to a user", "Replace the motherboard", "Store electricity"],
          correctIndex: 1,
        },
        {
          question: "Which of these is an example of a peripheral device?",
          options: ["Keyboard", "Motherboard", "Processor", "RAM chip"],
          correctIndex: 0,
        },
        {
          question: "Internal ports connect the motherboard to devices such as:",
          options: ["A printer", "A mouse", "An internal hard disk", "A USB flash drive"],
          correctIndex: 2,
        },
        {
          question: "Which port is also known as USB-C and can transfer both data and power on a single cable?",
          options: ["HDMI port", "SATA", "Type C port", "PCI express port"],
          correctIndex: 2,
        },
        {
          question: "Which port is used for transmitting high quality, high bandwidth audio and video between devices?",
          options: ["USB port", "HDMI port", "SATA", "Type C port"],
          correctIndex: 1,
        },
        {
          question: "SATA (Serial Advanced Technology Attachment) is mainly used to connect:",
          options: ["Hard disk drives and optical drives to the motherboard", "A keyboard to a monitor", "Two mobile phones together", "A printer to Wi-Fi"],
          correctIndex: 0,
        },
        {
          question: "A PCI express slot on a motherboard is used as:",
          options: ["A power socket", "An expansion slot for peripheral components", "A type of hard disk", "A cooling fan"],
          correctIndex: 1,
        },
        {
          question: "A 3D hologram is best described as:",
          options: ["A flat photograph", "A three-dimensional image created using photographic projection", "A type of computer virus", "A sound recording"],
          correctIndex: 1,
        },
        {
          question: "A 3D hologram, unlike older photography, does NOT require:",
          options: ["Light", "Special glasses to view", "A computer", "Electricity"],
          correctIndex: 1,
        },
        {
          question: "Virtual reality mainly creates an artificial environment experienced through:",
          options: ["Taste and smell", "Sight and sound", "Touch only", "Smell only"],
          correctIndex: 1,
        },
        {
          question: "Virtual reality environments are usually experienced using a:",
          options: ["Keyboard", "VR headset or goggles", "Printer", "Scanner"],
          correctIndex: 1,
        },
        {
          question: "Augmented reality (AR) combines the physical world with:",
          options: ["A completely fictional world only", "The virtual world, by adding computer-generated images to real surroundings", "Another physical location", "A paper map"],
          correctIndex: 1,
        },
        {
          question: "Which of these is an example of an augmented reality app mentioned in the chapter?",
          options: ["PokemonGo", "Photoshop", "Microsoft Word", "Windows Media Player"],
          correctIndex: 0,
        },
        {
          question: "In augmented reality (AR), the real-to-virtual ratio is approximately:",
          options: ["25% real and 75% virtual", "75% real and 25% virtual", "100% virtual", "100% real"],
          correctIndex: 1,
        },
        {
          question: "In virtual reality (VR), the user is:",
          options: ["Partially immersed and still aware of the real world", "Fully immersed and isolated from the real world", "Not immersed at all", "Immersed only in sound"],
          correctIndex: 1,
        },
        {
          question: "According to the chapter, augmented reality (AR) is mainly used to:",
          options: ["Enhance both the real and virtual worlds", "Replace the real world completely", "Delete real-world data", "Print documents"],
          correctIndex: 0,
        },
        {
          question: "According to the chapter, virtual reality (VR) is mainly used to:",
          options: ["Take photographs", "Enhance fictional reality, especially for the gaming world", "Repair hardware", "Browse the internet"],
          correctIndex: 1,
        },
        {
          question: "3D printing creates a physical object by:",
          options: ["Cutting a large block of material into shape", "Laying down successive layers of material until the object is formed", "Melting the object from a photograph", "Scanning an existing object only"],
          correctIndex: 1,
        },
        {
          question: "The process used in 3D printing, where material is added layer by layer, is called:",
          options: ["A subtractive process", "An additive process", "A destructive process", "A recycling process"],
          correctIndex: 1,
        },
        {
          question: "Who is credited as the inventor of stereolithography, the first commercial 3D printing technology?",
          options: ["Alexander Graham Bell", "D. H. Ring", "Charles Hull", "Elon Musk"],
          correctIndex: 2,
        },
        {
          question: "Self-driving cars are trained to:",
          options: ["Understand how a human drives, using artificial intelligence", "Only follow painted road lines", "Work without any data", "Avoid using any sensors"],
          correctIndex: 0,
        },
        {
          question: "Which company is described as a leading name in electric self-driving vehicles?",
          options: ["Honda", "IBM", "Tesla", "Intel"],
          correctIndex: 2,
        },
        {
          question: "Tesla's current AI technologies in its cars are mainly based on:",
          options: ["Manual programming only", "Unsupervised machine learning", "Random number generation", "Basic calculators"],
          correctIndex: 1,
        },
      ],
    },
  ],
};
