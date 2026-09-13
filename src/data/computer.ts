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
        {
          question: "A robot is best described as:",
          options: ["A machine that can do a task on its own, without the help of a person", "A type of computer virus", "A word processing program", "A cable used to connect peripherals"],
          correctIndex: 0,
        },
        {
          question: "Which of these is one of the three important factors that constitute a robot?",
          options: ["Robots must be made of metal", "Robots interact with the physical world via sensors and actuators", "Robots must always look like humans", "Robots cannot be programmed"],
          correctIndex: 1,
        },
        {
          question: "An actuator in a robot is best described as:",
          options: ["A device which causes movement, often using motors", "A type of camera", "A robot's power switch", "A wireless internet connection"],
          correctIndex: 0,
        },
        {
          question: "How many main types of robots are described in the chapter?",
          options: ["Two", "Three", "Four", "Five"],
          correctIndex: 3,
        },
        {
          question: "Robots that operate in a controlled environment, doing simple and monotonous tasks such as welding a door on an assembly line, are called:",
          options: ["Humanoid robots", "Pre-programmed robots", "Teleoperated robots", "Augmenting robots"],
          correctIndex: 1,
        },
        {
          question: "Robots that look like and/or mimic human behaviour, usually designed to look like real people with expressions, are called:",
          options: ["Humanoid robots", "Autonomous robots", "Pre-programmed robots", "Teleoperated robots"],
          correctIndex: 0,
        },
        {
          question: "Sophia, mentioned in the chapter, is an example of a:",
          options: ["Teleoperated robot", "Humanoid robot", "Pre-programmed robot", "Augmenting robot"],
          correctIndex: 1,
        },
        {
          question: "Robots that operate independently of human operators, using sensors and decision-making structures to carry out tasks in open environments, are called:",
          options: ["Autonomous robots", "Pre-programmed robots", "Humanoid robots", "Teleoperated robots"],
          correctIndex: 0,
        },
        {
          question: "NASA's Mars Curiosity rover is an example of a/an:",
          options: ["Humanoid robot", "Autonomous robot", "Teleoperated robot", "Augmenting robot"],
          correctIndex: 1,
        },
        {
          question: "Which of these is NOT given as an example of an autonomous robot?",
          options: ["Autonomous lawn mowers", "Autonomous robot cars", "Hospitality robots", "Air drones controlled by a human operator"],
          correctIndex: 3,
        },
        {
          question: "Semi-autonomous robots that use a wireless network to allow human control from a safe distance are called:",
          options: ["Teleoperated robots", "Humanoid robots", "Autonomous robots", "Augmenting robots"],
          correctIndex: 0,
        },
        {
          question: "Teleoperated robots, such as human-controlled delivery drones, are especially useful in:",
          options: ["Extreme geographical conditions and weather", "Classrooms only", "Kitchens only", "Libraries only"],
          correctIndex: 0,
        },
        {
          question: "Robots that either enhance current human capabilities or replace capabilities a human may have lost are called:",
          options: ["Pre-programmed robots", "Augmenting robots", "Autonomous robots", "Teleoperated robots"],
          correctIndex: 1,
        },
        {
          question: "Robotic prosthetic arms and legs are examples of:",
          options: ["Humanoid robots", "Autonomous robots", "Augmenting robots", "Pre-programmed robots"],
          correctIndex: 2,
        },
        {
          question: "Artificial Intelligence (AI) is best described as:",
          options: ["A branch of computer science that aims to create an intelligent system", "A type of computer port", "A 3D printing material", "A brand of computer processor"],
          correctIndex: 0,
        },
        {
          question: "Machines using artificial intelligence learn with experience and:",
          options: ["Can perform human-like tasks without being explicitly programmed for every step", "Can never make decisions", "Must be reprogrammed for every single task", "Cannot process any data"],
          correctIndex: 0,
        },
        {
          question: "According to the chapter, one advantage of using AI is that it:",
          options: ["Increases human error", "Reduces human error and is more reliable and efficient", "Removes the need for electricity", "Makes machines slower"],
          correctIndex: 1,
        },
      ],
    },
    {
      id: "ch2-ms-word",
      title: "Chapter 2: MS Word",
      questions: [
        {
          question: "Digital literacy skills describe:",
          options: ["Only the ability to type fast", "The set of skills and knowledge that enables students to interact with and navigate the digital world", "A type of printer", "A way of formatting hardware"],
          correctIndex: 1,
        },
        {
          question: "A word processor (WP) is best described as:",
          options: ["A device used to connect to the internet", "Software that provides support for text editing, formatting, and printing of text", "A type of computer virus", "A robot that types documents"],
          correctIndex: 1,
        },
        {
          question: "Which of these is part of the Microsoft Office 365 package used for word processing?",
          options: ["MS Word", "MS PowerPoint", "MS Excel", "MS Access"],
          correctIndex: 0,
        },
        {
          question: "To create a new blank document in Word 365, users should click on:",
          options: ["Open Other Documents", "The blank document option", "Take a tour", "Switch account"],
          correctIndex: 1,
        },
        {
          question: "Which of these is an example of a template users can use in Word for a specific purpose?",
          options: ["Resume", "Motherboard", "SATA cable", "Processor"],
          correctIndex: 0,
        },
        {
          question: "The Quick Access Toolbar in MS Word enables quick access to commonly used options such as:",
          options: ["SAVE, UNDO, REDO, and NEW file", "Font colour only", "Page margins only", "Internet settings"],
          correctIndex: 0,
        },
        {
          question: "The Home tab in MS Word opens a wider menu such as:",
          options: ["New, Open, Close, and Save", "Only printing options", "Only spelling check", "Only page numbers"],
          correctIndex: 0,
        },
        {
          question: "The Taskbar in Windows shows:",
          options: ["The programs that are open on the computer", "Only the current date", "Only battery percentage", "Only Wi-Fi signal strength"],
          correctIndex: 0,
        },
        {
          question: "Which shortcut key opens the Help window in MS Word?",
          options: ["F1", "F5", "F12", "F9"],
          correctIndex: 0,
        },
        {
          question: "In the Window Controls, the button that lets you minimise/hide a window in the taskbar is used to:",
          options: ["Maximize the window", "Minimize the window", "Close the software", "Restore the floating window"],
          correctIndex: 1,
        },
        {
          question: "In the Window Controls, the button that puts a window into a floating state so it can be resized is called:",
          options: ["Minimize", "Maximize", "Close", "Restore"],
          correctIndex: 1,
        },
        {
          question: "The button used to exit MS Word software is called:",
          options: ["Minimize", "Maximize", "Close", "Restore"],
          correctIndex: 2,
        },
        {
          question: "A vertical scroll bar in MS Word enables the user to:",
          options: ["Scroll the content up or down", "Change the font colour", "Print the document", "Insert a table"],
          correctIndex: 0,
        },
        {
          question: "The Zoom tool in MS Word is used to:",
          options: ["Set the visual size of the text according to a ratio", "Delete text permanently", "Change the page orientation", "Insert an image"],
          correctIndex: 0,
        },
        {
          question: "The Status Bar in MS Word, located at the bottom of the software, displays:",
          options: ["Number of pages, number of words, and proofing errors", "The document's file size only", "Only the printer name", "Only the internet connection status"],
          correctIndex: 0,
        },
        {
          question: "The large space below the ruler where text is typed and images/tables can be inserted is called the:",
          options: ["Status bar", "Text area (workspace or document pane)", "Ribbon", "Title bar"],
          correctIndex: 1,
        },
        {
          question: "The vertical ruler in MS Word is generally measured in:",
          options: ["Inches", "Kilometres", "Pixels only", "Degrees"],
          correctIndex: 0,
        },
        {
          question: "The blinking vertical line that shows where text will appear when typing is called the:",
          options: ["Cursor", "Tab selector", "Ribbon", "Gutter"],
          correctIndex: 0,
        },
        {
          question: "The Tab Selector in MS Word is found:",
          options: ["In the corner between the horizontal and vertical rulers", "At the very bottom of the screen", "Inside the Insert tab only", "On the Taskbar"],
          correctIndex: 0,
        },
        {
          question: "Which keyboard shortcut is used to make selected text Bold in MS Word?",
          options: ["CTRL + B", "CTRL + I", "CTRL + U", "CTRL + D"],
          correctIndex: 0,
        },
        {
          question: "Which keyboard shortcut is used to make selected text Italic in MS Word?",
          options: ["CTRL + B", "CTRL + I", "CTRL + U", "CTRL + J"],
          correctIndex: 1,
        },
        {
          question: "Which keyboard shortcut draws a line under selected text (Underline) in MS Word?",
          options: ["CTRL + U", "CTRL + B", "CTRL + E", "CTRL + L"],
          correctIndex: 0,
        },
        {
          question: "In MS Word, the term \"Default\" means:",
          options: ["A setting that must always be changed manually", "An automatic selection or something already implemented in the software", "A type of font error", "A page margin error"],
          correctIndex: 1,
        },
        {
          question: "Which font is the default font in MS Word, as mentioned in the chapter?",
          options: ["Calibri", "Arial", "Times New Roman", "Aachen Std"],
          correctIndex: 0,
        },
        {
          question: "Font size in MS Word is measured in:",
          options: ["Points (Pts)", "Inches", "Centimetres", "Pixels"],
          correctIndex: 0,
        },
        {
          question: "How many points are there in one inch, according to the chapter?",
          options: ["36", "50", "72", "100"],
          correctIndex: 2,
        },
        {
          question: "How many types of text alignment are there in MS Word?",
          options: ["Two", "Three", "Four", "Five"],
          correctIndex: 2,
        },
        {
          question: "Which of these is the default text alignment in MS Word?",
          options: ["Left", "Centre", "Right", "Justify"],
          correctIndex: 0,
        },
        {
          question: "Which shortcut key is used for Centre alignment in MS Word?",
          options: ["CTRL + L", "CTRL + E", "CTRL + R", "CTRL + J"],
          correctIndex: 1,
        },
        {
          question: "Which shortcut key is used for Justify alignment in MS Word?",
          options: ["CTRL + L", "CTRL + E", "CTRL + R", "CTRL + J"],
          correctIndex: 3,
        },
        {
          question: "In MS Word, all other text formatting options (beyond the Home tab shortcuts) can be accessed using:",
          options: ["CTRL + D or clicking the node in the corner of the Font group", "CTRL + P only", "The Insert tab only", "The Layout tab only"],
          correctIndex: 0,
        },
        {
          question: "Whenever a document has more than two items to describe, it is a good idea to:",
          options: ["Delete the extra items", "Consider creating a list using bullets or numbering", "Change the page size", "Turn off spell check"],
          correctIndex: 1,
        },
        {
          question: "To outline topics within a list using different levels (e.g. 1.1, 1.1.1, 1.1.1.1), MS Word provides a feature called:",
          options: ["A multilevel list", "A single bullet", "A page break", "A gutter"],
          correctIndex: 0,
        },
        {
          question: "There are two major font families mentioned in the chapter. They are:",
          options: ["Bold and Italic", "Serif and Sans Serif", "Print and Cursive", "Header and Footer"],
          correctIndex: 1,
        },
        {
          question: "Which of these is given as the most common example of a Serif font?",
          options: ["Arial", "Calibri", "Times New Roman", "Comic Sans"],
          correctIndex: 2,
        },
        {
          question: "Which of these is given as the most common example of a Sans Serif font?",
          options: ["Times New Roman", "Arial", "Georgia", "Garamond"],
          correctIndex: 1,
        },
        {
          question: "In a table, the smallest unit used for data input is called a:",
          options: ["Row", "Column", "Cell", "Ribbon"],
          correctIndex: 2,
        },
        {
          question: "Which of these is NOT one of the three main ways to insert a table mentioned in the chapter?",
          options: ["Selecting the number of required rows and columns", "Using the Insert Table option and typing the numbers", "Using the Draw Table option", "Copying a table from a printed book using a scanner"],
          correctIndex: 3,
        },
        {
          question: "After inserting a table, an additional tab appears in the ribbon called:",
          options: ["Table Tools", "Picture Format", "Header & Footer", "Animations"],
          correctIndex: 0,
        },
        {
          question: "A header in MS Word is:",
          options: ["A text/image or page number placed at the top of a page", "Only found at the bottom of a page", "A type of font", "A type of table"],
          correctIndex: 0,
        },
        {
          question: "A footer in MS Word is placed:",
          options: ["At the top of a page", "At the bottom of a page", "In the middle of the page only", "Only on the first page"],
          correctIndex: 1,
        },
        {
          question: "Headers and footers are given in the empty space on the top and bottom of a page, called the:",
          options: ["Gutter", "Margins", "Ribbon", "Text area"],
          correctIndex: 1,
        },
        {
          question: "After closing the Header & Footer view, the header/footer becomes:",
          options: ["Permanently deleted", "Dull and locked, until double-clicked to edit again", "Automatically hidden forever", "Converted into a table"],
          correctIndex: 1,
        },
        {
          question: "The Thesaurus feature in MS Word is mainly used to:",
          options: ["Look up synonyms and antonyms for a selected word", "Check spelling mistakes only", "Insert images", "Change the page orientation"],
          correctIndex: 0,
        },
        {
          question: "To use the Thesaurus, users should select a word and then go to which tab?",
          options: ["Home", "Insert", "Review", "Layout"],
          correctIndex: 2,
        },
        {
          question: "Which of the following is found within the Page Setup group of the Layout tab?",
          options: ["Margins, Orientation, Size, and Columns", "Bullets and Numbering", "Font colour and Font size", "Thesaurus and Word Count"],
          correctIndex: 0,
        },
        {
          question: "Page margins in MS Word are:",
          options: ["The empty space all around the page", "Only found at the top of the page", "The same as a gutter", "Only used for tables"],
          correctIndex: 0,
        },
        {
          question: "What is the default page margin in MS Word, as stated in the chapter?",
          options: ["2 inch", "2.54 inch", "1.95 inch", "1 inch"],
          correctIndex: 3,
        },
        {
          question: "Which page orientation is generally recommended for official documents and letters?",
          options: ["Landscape", "Portrait", "Diagonal", "Mirrored"],
          correctIndex: 1,
        },
        {
          question: "Which page orientation is generally recommended for postcards or drawings?",
          options: ["Portrait", "Landscape", "Vertical", "Justified"],
          correctIndex: 1,
        },
        {
          question: "A gutter in Page Setup is used as:",
          options: ["Binding space for books and magazines", "A tool to insert pictures", "A type of font style", "A way to zoom the page"],
          correctIndex: 0,
        },
        {
          question: "To insert an image into a Word document, users should click on the Insert tab and then click on:",
          options: ["The Pictures icon", "The Table icon", "The Header icon", "The Thesaurus icon"],
          correctIndex: 0,
        },
        {
          question: "When an image is selected in MS Word, a new tab appears on the ribbon called:",
          options: ["Picture Format", "Table Design", "Mailings", "References"],
          correctIndex: 0,
        },
        {
          question: "An inserted image can be resized in MS Word by:",
          options: ["Using handles on the sides of the image or the encircled size bar", "Only by reinserting a smaller image file", "Deleting and retyping the document", "Changing the font size"],
          correctIndex: 0,
        },
        {
          question: "Which ribbon tab in MS Word contains the Page Setup option?",
          options: ["Insert", "Home", "Page Layout", "Review"],
          correctIndex: 2,
        },
      ],
    },
    {
      id: "ch3-ms-powerpoint",
      title: "Chapter 3: MS PowerPoint",
      questions: [
        {
          question: "Multimedia presentations are widely used by students and employees to:",
          options: ["Present assignments and show projects", "Only send emails", "Only browse the internet", "Only print documents"],
          correctIndex: 0,
        },
        {
          question: "Presentation software allows users to make presentations interactive by adding objects such as:",
          options: ["Images, sounds, video clips, and tables", "Only plain text", "Only page numbers", "Only page margins"],
          correctIndex: 0,
        },
        {
          question: "Which software is used in this chapter to create a multimedia presentation, as part of the Microsoft Office 365 package?",
          options: ["MS PowerPoint 365", "MS Word 365", "MS Excel 365", "MS Access 365"],
          correctIndex: 0,
        },
        {
          question: "Which of these is NOT mentioned as another presentation software besides PowerPoint?",
          options: ["Prezi", "Canva", "Movie Maker", "Adobe Photoshop"],
          correctIndex: 3,
        },
        {
          question: "Most of the interface components of PowerPoint are:",
          options: ["Completely different from MS Word", "Similar to MS Word", "Only available in Landscape mode", "Only available with an internet connection"],
          correctIndex: 1,
        },
        {
          question: "In the PowerPoint interface, the shortcut key for Normal View is:",
          options: ["F5", "F6", "F1", "F12"],
          correctIndex: 1,
        },
        {
          question: "When one opens MS PowerPoint, the pre-installed designs shown on the screen are called:",
          options: ["Templates", "Placeholders", "Animations", "Transitions"],
          correctIndex: 0,
        },
        {
          question: "Choosing the Blank Presentation option means that:",
          options: ["There are no designs applied", "The presentation is automatically deleted", "Only text can be added, not images", "Animations are switched off"],
          correctIndex: 0,
        },
        {
          question: "Zoom is a simple feature in Office where users:",
          options: ["Just have to scroll the bar based on their requirement", "Must retype the whole document", "Can only zoom in, not out", "Can only use it in Slide Show view"],
          correctIndex: 0,
        },
        {
          question: "When a slide show is ready, it can be viewed in fullscreen by pressing which shortcut key?",
          options: ["F5", "F1", "F6", "F9"],
          correctIndex: 0,
        },
        {
          question: "Reading view in PowerPoint functions as:",
          options: ["An alternative to Slide Show view, providing better visibility before going into the show", "A way to permanently delete slides", "A tool to insert charts only", "A print preview mode only"],
          correctIndex: 0,
        },
        {
          question: "Slide Sorter view is useful because it allows users to:",
          options: ["See all the slides together and move them back and forth by drag and drop", "Only edit text in one slide at a time", "Only preview animations", "Only check spelling"],
          correctIndex: 0,
        },
        {
          question: "Normal View in PowerPoint is best described as:",
          options: ["The main editing and default view", "A view only used for printing", "A view only used for saving files", "A read-only view"],
          correctIndex: 0,
        },
        {
          question: "By default, when a new blank presentation is created, PowerPoint displays:",
          options: ["The Title Slide", "A blank grey screen", "The Slide Sorter view", "The Animation Pane"],
          correctIndex: 0,
        },
        {
          question: "The upper and lower boxes on a Title Slide, where the title and subtitle are typed, are called:",
          options: ["Place holders", "Text boxes only", "Cells", "Ribbons"],
          correctIndex: 0,
        },
        {
          question: "To add a new slide in PowerPoint, users should click on:",
          options: ["The New Slide option", "The Save As option", "The Zoom tool", "The Ruler button"],
          correctIndex: 0,
        },
        {
          question: "The slide layout that includes a title box along with a content area for text or objects is called:",
          options: ["Title and Content", "Two Content", "Comparison", "Title Only"],
          correctIndex: 0,
        },
        {
          question: "Which of the following is an object that can be inserted into a PowerPoint slide, according to the chapter?",
          options: ["Tables, charts, SmartArt, and pictures", "Only plain text", "Only page numbers", "Only page margins"],
          correctIndex: 0,
        },
        {
          question: "Graphs and charts in a presentation are mainly used because they are:",
          options: ["A graphical representation of numbers, facts, and figures", "Only decorative elements with no purpose", "Only used to change slide colours", "Only used to add sound"],
          correctIndex: 0,
        },
        {
          question: "SmartArt Graphic is used to insert complex graphics such as:",
          options: ["Flowcharts, hierarchy diagrams, life cycles, and pyramids", "Only bullet points", "Only page numbers", "Only header and footer text"],
          correctIndex: 0,
        },
        {
          question: "If the required image is not saved on the computer, PowerPoint allows users to:",
          options: ["Search for images online", "Only draw the image manually", "Only use a scanner", "Only copy from another presentation"],
          correctIndex: 0,
        },
        {
          question: "Animation in a multimedia presentation can be defined as:",
          options: ["A method of using drawings, models, or puppets to create an illusion of movement in a sequence", "A way to permanently delete a slide", "A type of font style", "A way to password protect a file"],
          correctIndex: 0,
        },
        {
          question: "To use animations in PowerPoint, users have to click on which tab?",
          options: ["Animations", "Design", "Layout", "Review"],
          correctIndex: 0,
        },
        {
          question: "Animation options are only enabled when:",
          options: ["An object on the screen is selected", "The presentation is saved", "The internet is connected", "The slide show has ended"],
          correctIndex: 0,
        },
        {
          question: "Which type of animation is used to introduce a slide object within a slide?",
          options: ["Entrance", "Emphasis", "Exit", "Motion Paths"],
          correctIndex: 0,
        },
        {
          question: "Which type of animation is used to animate slide objects that are already present on a slide?",
          options: ["Entrance", "Emphasis", "Exit", "Motion Paths"],
          correctIndex: 1,
        },
        {
          question: "Which type of animation is used to animate slide objects off a slide?",
          options: ["Entrance", "Emphasis", "Exit", "Motion Paths"],
          correctIndex: 2,
        },
        {
          question: "Motion Paths animations are typically used to:",
          options: ["Move slide objects already on a slide along a given pattern", "Delete a slide", "Change the slide background colour only", "Insert a new table"],
          correctIndex: 0,
        },
        {
          question: "To start a slide show from the very first slide, users should click:",
          options: ["From Beginning", "From Current Slide", "Custom Slide Show", "Hide Slide"],
          correctIndex: 0,
        },
        {
          question: "To view the presentation starting from the slide currently being worked on, users should click:",
          options: ["From Beginning", "From Current Slide", "Rehearse with Coach", "Record"],
          correctIndex: 1,
        },
        {
          question: "To exit Slide Show view at any time, users should press:",
          options: ["Esc", "F5", "Ctrl + S", "Delete"],
          correctIndex: 0,
        },
        {
          question: "To save a presentation as an executable slide show file, users should choose which file type in Save As?",
          options: ["PowerPoint Show", "PDF", "PowerPoint Template", "PNG Portable Network Graphics Format"],
          correctIndex: 0,
        },
        {
          question: "Which shortcut key can be used to open the Save As dialog box in PowerPoint?",
          options: ["F12", "F1", "F5", "F6"],
          correctIndex: 0,
        },
        {
          question: "Prezi is a presentation software widely used by:",
          options: ["The business community, educators, and students", "Only professional photographers", "Only musicians", "Only doctors"],
          correctIndex: 0,
        },
        {
          question: "Which presentation software is described as free and used to create and share a visual story from digital photos and videos?",
          options: ["Microsoft Photo Story", "Canva", "Prezi", "PowerPoint"],
          correctIndex: 0,
        },
        {
          question: "Movie Maker for Windows converts photos into movies and allows:",
          options: ["Basic video editing, adding background music, and adding text captions", "Only 3D printing", "Only sending emails", "Only creating spreadsheets"],
          correctIndex: 0,
        },
        {
          question: "Canva is best described as:",
          options: ["A free to use online graphic design platform", "A type of computer processor", "A type of email protocol", "A type of computer port"],
          correctIndex: 0,
        },
      ],
    },
    {
      id: "ch4-internet-post-office",
      title: "Chapter 4: The Internet as a Post Office",
      questions: [
        {
          question: "The Internet is best described as:",
          options: ["A worldwide network of millions of computers", "A single computer owned by one company", "A type of printer", "A type of email only"],
          correctIndex: 0,
        },
        {
          question: "Which of these is one of the most widely used features of the Internet, according to the chapter?",
          options: ["Email", "3D printing", "Robotics", "Word processing"],
          correctIndex: 0,
        },
        {
          question: "An ISP (Internet Service Provider) is:",
          options: ["A company that offers Internet services to individuals and corporations for a fee", "A type of email address", "A type of web browser", "A type of computer virus"],
          correctIndex: 0,
        },
        {
          question: "What does the term \"Modem\" stand for?",
          options: ["Modulator-demodulator", "Modern Data Manager", "Mobile Data Model", "Module Development Machine"],
          correctIndex: 0,
        },
        {
          question: "A modem is best described as:",
          options: ["A computer peripheral that lets users connect their computer to other computers to transmit and receive data", "A type of email account", "A type of web page", "A type of search engine"],
          correctIndex: 0,
        },
        {
          question: "A web page is a document written in:",
          options: ["HTML (Hypertext Markup Language)", "MP3 format", "JPEG format", "PDF format only"],
          correctIndex: 0,
        },
        {
          question: "A web browser is an application program that:",
          options: ["Reads HTML documents, converts them to a readable form, and displays them on screen", "Sends emails only", "Only stores files", "Only prints documents"],
          correctIndex: 0,
        },
        {
          question: "A website is best described as:",
          options: ["A collection of web pages with related information", "A single email message", "A type of modem", "A type of ISP"],
          correctIndex: 0,
        },
        {
          question: "The World Wide Web, or simply \"the web\", is:",
          options: ["The world wide collection of publicly accessible web pages stored on computers connected to the Internet", "A single private computer network", "A type of email client", "A type of printer driver"],
          correctIndex: 0,
        },
        {
          question: "Who developed the World Wide Web in 1989, according to the chapter?",
          options: ["Tim Berners-Lee", "Alexander Graham Bell", "Charles Hull", "Elon Musk"],
          correctIndex: 0,
        },
        {
          question: "A blog is best described as:",
          options: ["A personal website similar to a diary, where the owner writes regularly", "A type of search engine", "A type of modem", "A type of IP address"],
          correctIndex: 0,
        },
        {
          question: "The front page or index page of any website, which automatically opens when a website is visited, is called the:",
          options: ["Home page", "Web browser", "Domain name", "URL"],
          correctIndex: 0,
        },
        {
          question: "URL stands for:",
          options: ["Uniform Resource Locator", "Unlimited Resource Locator", "Universal Reading Language", "Unique Read Log"],
          correctIndex: 0,
        },
        {
          question: "How many types of Internet addressing are mentioned in the chapter?",
          options: ["One", "Two", "Three", "Four"],
          correctIndex: 1,
        },
        {
          question: "In the number addressing system, the address is a numeric address called the:",
          options: ["Internet Protocol (IP) address", "Domain Name System (DNS)", "Uniform Resource Locator (URL)", "Modem address"],
          correctIndex: 0,
        },
        {
          question: "An IP address is made up of four numbers in the range:",
          options: ["0 to 255, joined together by periods", "1 to 100, joined by commas", "0 to 999, joined by dashes", "1 to 1000, joined by slashes"],
          correctIndex: 0,
        },
        {
          question: "The letter addressing system is also called the:",
          options: ["Domain Name System (DNS)", "Internet Protocol", "Modem Protocol", "Post Office Protocol"],
          correctIndex: 0,
        },
        {
          question: "Which of these is an example of a domain name, as given in the chapter?",
          options: ["hotmail.com", "192.12.148.73", "131.58.97.254", "0.0.0.0"],
          correctIndex: 0,
        },
        {
          question: "The last three letters of a domain name (such as .com or .edu) provide information about:",
          options: ["The kind of organisation to which the address belongs", "The user's password", "The user's IP address", "The user's modem type"],
          correctIndex: 0,
        },
        {
          question: "Which domain extension represents an educational institution?",
          options: [".edu", ".com", ".gov", ".mil"],
          correctIndex: 0,
        },
        {
          question: "Which domain extension represents a government department?",
          options: [".net", ".org", ".gov", ".com"],
          correctIndex: 2,
        },
        {
          question: "Which two-letter country code represents Pakistan?",
          options: ["pk", "pa", "pn", "pt"],
          correctIndex: 0,
        },
        {
          question: "The process of translating a letter (domain) address to its corresponding IP address is called:",
          options: ["DNS name resolution", "Email authentication", "Data compression", "Web hosting"],
          correctIndex: 0,
        },
        {
          question: "An email message can consist of only a few lines of text or several thousand lines because, unlike the postal service:",
          options: ["The message is not charged by weight", "The message must always be printed", "The message can only contain images", "The message can only be sent once a day"],
          correctIndex: 0,
        },
        {
          question: "According to the chapter, sending and receiving email messages:",
          options: ["Has no charge, even though the message travels across the world", "Costs the same as a postal stamp", "Is charged based on file size only", "Is only free for businesses"],
          correctIndex: 0,
        },
        {
          question: "In the email address alsan_company@hotmail.com, what does \"hotmail.com\" represent?",
          options: ["An address on the Internet (the computer's domain)", "The username or login name", "The subject of the email", "The attachment name"],
          correctIndex: 0,
        },
        {
          question: "In an email address, the username and the computer's domain name are separated by which symbol?",
          options: ["@", "#", "&", "*"],
          correctIndex: 0,
        },
        {
          question: "Which email folder stores incoming email messages, showing unread messages as highlighted?",
          options: ["Inbox", "Drafts", "Sent Mail", "Trash"],
          correctIndex: 0,
        },
        {
          question: "Which email folder stores messages that have been started but not yet sent?",
          options: ["Inbox", "Draft", "Sent Mail", "Trash"],
          correctIndex: 1,
        },
        {
          question: "Which email folder stores messages that have already been sent?",
          options: ["Inbox", "Draft", "Sent Mail", "Trash"],
          correctIndex: 2,
        },
        {
          question: "Which email folder stores deleted messages?",
          options: ["Inbox", "Draft", "Contacts", "Trash"],
          correctIndex: 3,
        },
        {
          question: "Which email command lets you create a brand new email message?",
          options: ["Compose", "Reply", "Forward", "Delete"],
          correctIndex: 0,
        },
        {
          question: "Which email command lets you send a received message on to someone else?",
          options: ["Reply", "Forward", "Compose", "Print"],
          correctIndex: 1,
        },
        {
          question: "There are three common protocols used to deliver email over the Internet. Which of these is NOT one of them?",
          options: ["SMTP", "POP", "IMAP", "HTTP"],
          correctIndex: 3,
        },
        {
          question: "POP stands for:",
          options: ["Post Office Protocol", "Personal Online Password", "Protocol Over the Phone", "Print Output Protocol"],
          correctIndex: 0,
        },
        {
          question: "The POP protocol is primarily a:",
          options: ["Two-way protocol that syncs emails back to the server", "One-way protocol that does not sync back to the server", "Video call protocol", "File compression protocol"],
          correctIndex: 1,
        },
        {
          question: "IMAP stands for:",
          options: ["Internet Message Access Protocol", "Internal Mail Access Point", "International Mail Application Protocol", "Internet Modem Access Point"],
          correctIndex: 0,
        },
        {
          question: "Unlike POP, the IMAP protocol allows:",
          options: ["Two-way sync of emails between the server and the email client", "No syncing at all", "Only sending, never receiving", "Only receiving, never sending"],
          correctIndex: 0,
        },
        {
          question: "SMTP stands for:",
          options: ["Simple Mail Transfer Protocol", "System Mail Transport Program", "Secure Mail Transfer Process", "Server Message Transfer Point"],
          correctIndex: 0,
        },
        {
          question: "SMTP is mainly responsible for:",
          options: ["The transfer of emails between email clients and email servers", "Storing contacts only", "Formatting text in emails", "Blocking spam emails only"],
          correctIndex: 0,
        },
        {
          question: "A 2-Step authentication process for email accounts mainly helps to:",
          options: ["Protect the account from unauthorised access", "Make the email load faster", "Increase storage space", "Change the email's domain name"],
          correctIndex: 0,
        },
        {
          question: "Which of the following is listed as an advantage of email in the chapter?",
          options: ["Speed — an email can reach any part of the world in a fraction of a second", "It always costs more than postal mail", "It requires a fax machine", "It cannot include attachments"],
          correctIndex: 0,
        },
        {
          question: "Cc, when composing an email, stands for:",
          options: ["Carbon Copy", "Central Copy", "Compose Copy", "Contact Copy"],
          correctIndex: 0,
        },
        {
          question: "Bcc, when composing an email, stands for:",
          options: ["Blind Carbon Copy", "Basic Carbon Copy", "Blocked Contact Copy", "Bulk Contact Copy"],
          correctIndex: 0,
        },
        {
          question: "What is the main difference between Cc and Bcc when sending an email?",
          options: ["Bcc hides the recipient's address from other recipients, while Cc does not", "Cc is only for attachments", "Bcc can only be used once a day", "There is no difference"],
          correctIndex: 0,
        },
        {
          question: "This way of signing in to another website using your email address and password is called:",
          options: ["Single Sign On (SSO)", "Double Sign On", "Blind Sign On", "Forward Sign On"],
          correctIndex: 0,
        },
        {
          question: "Which of these is a recommended way to stay safe while sending and receiving emails?",
          options: ["Never open emails promising lottery tickets", "Always open every attachment immediately", "Share your password with friends", "Use the same password forever"],
          correctIndex: 0,
        },
        {
          question: "Public Wi-Fi should be avoided when checking email because:",
          options: ["Hackers can access your accounts over public Wi-Fi", "It is always slower", "It costs more money", "It disables spam filters"],
          correctIndex: 0,
        },
        {
          question: "A signature in an email program is:",
          options: ["Text, such as contact information, automatically inserted at the bottom of every message", "A password used to sign in", "A type of attachment", "A type of spam filter"],
          correctIndex: 0,
        },
        {
          question: "It is important to sign out of an email account properly, especially when:",
          options: ["Using a public or shared computer", "Using your own personal computer", "Sending an email to yourself", "Composing a long email"],
          correctIndex: 0,
        },
        {
          question: "A search engine is best described as:",
          options: ["A program that searches the web for specified keywords and returns a list of web pages", "A type of email protocol", "A type of modem", "A type of web browser only used offline"],
          correctIndex: 0,
        },
        {
          question: "Which of these is given as a popular search engine in the chapter?",
          options: ["www.google.com", "www.hotmail.com", "www.outlook.com", "www.yahoo-mail.com"],
          correctIndex: 0,
        },
        {
          question: "Looking for information on the Internet is commonly referred to as:",
          options: ["Surfing or exploring the Internet", "Modem addressing", "DNS resolution", "Email authentication"],
          correctIndex: 0,
        },
      ],
    },
  ],
};
