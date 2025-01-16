import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal } from 'antd';
import { features } from 'process';
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<any>(null);
  const tabs = [
    { label: 'Mobility', content: '' },
    { label: 'Frontend', content: '' },
    { label: 'Backend', content: '' },
    { label: 'Machine Learning', content: '' },
    { label: 'Artificial Intelligence', content: '' },
    { label: 'Data Analytics', content: '' },
    { label: 'CMS & E-Commerce', content: '' },
  ];

  return (
    <div className="bg-[#1c1c1e] text-white">
      {/* Tabs */}
      <TechonologyDetailModal
        data={modalData}
        open={isModalOpen}
        setOpen={setIsModalOpen}
      />
      <div className="flex cursor-pointer list-none justify-between overflow-x-scroll scroll-smooth text-[1rem] font-semibold text-white lg:overflow-x-auto">
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => setActiveTab(index)}
            className={`p-2 px-5 ${
              activeTab === index ? 'border-b-2 border-gray-500' : ''
            }`}
          >
            {tab.label}
          </li>
        ))}
      </div>

      {/* Content */}
      <div className="justify-between pb-10 lg:pb-0">
        {activeTab === 0 && (
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 lg:gap-6">
            {TechonologyData[0].map((item, index) => (
              <IconWithName
                setModalData={setModalData}
                setIsModalOpen={setIsModalOpen}
                idx={index}
                item={item}
                key={item.name}
              />
            ))}
          </div>
        )}

        {activeTab === 1 && (
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 lg:gap-6">
            {TechonologyData[1].map((item, index) => (
              <IconWithName
                setModalData={setModalData}
                setIsModalOpen={setIsModalOpen}
                idx={index}
                item={item}
                key={item.name}
              />
            ))}
          </div>
        )}
        {activeTab === 2 && (
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 lg:gap-6">
            {TechonologyData[2].map((item, index) => (
              <IconWithName
                setModalData={setModalData}
                setIsModalOpen={setIsModalOpen}
                idx={index}
                item={item}
                key={item.name}
              />
            ))}
          </div>
        )}
        {activeTab === 3 && (
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 lg:gap-6">
            {TechonologyData[3].map((item, index) => (
              <IconWithName
                setModalData={setModalData}
                setIsModalOpen={setIsModalOpen}
                idx={index}
                item={item}
                key={item.name}
              />
            ))}
          </div>
        )}
        {activeTab === 4 && (
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 lg:gap-6">
            {TechonologyData[4].map((item, index) => (
              <IconWithName
                setModalData={setModalData}
                setIsModalOpen={setIsModalOpen}
                idx={index}
                item={item}
                key={item.name}
              />
            ))}
          </div>
        )}
        {activeTab === 5 && (
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 lg:gap-6">
            {TechonologyData[5].map((item, index) => (
              <IconWithName
                setModalData={setModalData}
                setIsModalOpen={setIsModalOpen}
                idx={index}
                item={item}
                key={item.name}
              />
            ))}
          </div>
        )}
        {activeTab === 6 && (
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 lg:gap-6">
            {TechonologyData[6].map((item, index) => (
              <IconWithName
                setModalData={setModalData}
                setIsModalOpen={setIsModalOpen}
                idx={index}
                item={item}
                key={item.name}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;

const TechonologyData = [
  [
    {
      name: 'React Native',
      imgSrc: './react-native.svg',
      content: 'React Native',
      title: 'React Native: Build Cross-Platform Apps Faster',
      description:
        "React Native lets you build high-performance mobile apps for iOS and Android using a single JavaScript codebase. Developed by Facebook, it's perfect for developers who want to create apps quickly without compromising on quality.",
      features: [
        'Cross-Platform: One codebase, two platforms.',
        'Hot Reloading: See changes instantly during development.',
        'Native Performance: Fast and smooth, just like native apps.',
        'Huge Ecosystem: Access to a wide range of libraries and tools.',
        'Active Community: Supported by a passionate developer community.',
      ],
    },
    {
      name: 'Xamarin',
      imgSrc: './xamarin-icon.svg',
      alt: 'Xamarin',
      content: 'Xamarin',
      title: 'Xamarin: Build Cross-Platform Apps with .NET',
      description:
        'Xamarin allows developers to create high-performance, native mobile applications for iOS, Android, and Windows using the .NET framework and C#. It simplifies app development by sharing code across platforms.',
      features: [
        'Cross-Platform: Write once, run on iOS, Android, and Windows.',
        'Native API Access: Direct access to platform-specific APIs.',
        'Performance: Native-like performance for mobile apps.',
        'Code Sharing: Reuse up to 90% of your code.',
        'Microsoft Support: Backed by Microsoft with extensive resources.',
      ],
    },
    {
      name: 'Ionic',
      imgSrc: './Ionic.svg',
      alt: 'Ionic',
      content: 'Ionic',
      title: 'Ionic: Open Source Mobile UI Toolkit',
      description:
        'Ionic is an open-source UI toolkit for building high-quality mobile and web applications using web technologies like HTML, CSS, and JavaScript. It integrates seamlessly with popular frameworks like Angular, React, and Vue.',
      features: [
        'Web Technologies: Build apps using HTML, CSS, and JavaScript.',
        'Framework Agnostic: Works with Angular, React, and Vue.',
        'Cross-Platform: Create apps for iOS, Android, and the web.',
        'Huge Library: Pre-built UI components for faster development.',
        'Capacitor Integration: Access native device features easily.',
      ],
    },
    {
      name: 'Kotlin',
      imgSrc: './kotlin.svg',
      alt: 'Kotlin',
      content: 'Kotlin',
      title: 'Kotlin: Modern Language for Android Development',
      description:
        'Kotlin is a modern programming language developed by JetBrains. It’s designed to be concise, safe, and fully interoperable with Java, making it the preferred language for Android development.',
      features: [
        'Interoperability: Fully compatible with Java.',
        'Conciseness: Write less code with fewer errors.',
        'Null Safety: Reduce the risk of null pointer exceptions.',
        'Coroutines: Simplify asynchronous programming.',
        'Officially Supported: Backed by Google for Android development.',
      ],
    },
    {
      name: 'Flutter',
      imgSrc: './flutter.svg',
      alt: 'Flutter',
      content: 'Flutter',
      title: 'Flutter: Build Natively Compiled Apps',
      description:
        'Flutter is Google’s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. It uses Dart programming language and offers fast development with a rich set of customizable widgets.',
      features: [
        'Single Codebase: One codebase for multiple platforms.',
        'Custom Widgets: Create highly customizable UIs.',
        'Hot Reload: Instantly see changes during development.',
        'High Performance: Native compilation for speed and efficiency.',
        'Strong Community: Backed by Google and an active developer base.',
      ],
    },
    {
      name: 'Java',
      imgSrc: './java.svg',
      alt: 'Java',
      content: 'Java',
      title: 'Java: Reliable and Versatile Programming Language',
      description:
        'Java is a powerful, object-oriented programming language used to build cross-platform applications, from enterprise-level systems to Android apps. Its robustness and scalability make it a top choice for developers worldwide.',
      features: [
        'Platform Independence: Write once, run anywhere.',
        'Scalable: Ideal for large-scale applications.',
        'Android Development: Primary language for Android apps.',
        'Rich Ecosystem: Libraries, frameworks, and tools for all needs.',
        'Security: Built-in security features for robust applications.',
      ],
    },
    {
      name: 'Xcode',
      imgSrc: './xcode.svg',
      alt: 'Xcode',
      content: 'Xcode',
      title: 'Xcode: Apple’s IDE for iOS and macOS Development',
      description:
        'Xcode is Apple’s official IDE for developing apps for iOS, macOS, watchOS, and tvOS. It provides a suite of tools for designing, coding, and debugging apps tailored to Apple devices.',
      features: [
        'Integrated Development: Design, code, and debug in one place.',
        'Interface Builder: Create UIs visually with drag-and-drop tools.',
        'Simulator: Test your apps on virtual devices.',
        'Swift Integration: Fully supports Swift programming language.',
        'Apple Ecosystem: Seamless integration with Apple services.',
      ],
    },
    {
      name: 'Swift',
      imgSrc: './swift.svg',
      alt: 'Swift',
      content: 'Swift',
      title: 'Swift: Fast and Safe Programming for Apple Platforms',
      description:
        'Swift is Apple’s modern programming language designed to create apps for iOS, macOS, watchOS, and tvOS. It emphasizes safety, performance, and expressiveness, enabling developers to build efficient and maintainable code.',
      features: [
        'Modern Syntax: Simple, clean, and expressive.',
        'Safety First: Prevents common programming errors.',
        'Performance: Compiles to optimized native code.',
        'Interoperable: Works seamlessly with Objective-C.',
        'Open Source: Encourages community contributions and improvements.',
      ],
    },
  ],

  [
    {
      name: 'JavaScript',
      imgSrc: './javascript.svg',
      alt: 'JavaScript',
      content: 'JavaScript',
      width: 50,
      title: 'JavaScript: The Language of the Web',
      description:
        'JavaScript is a versatile, high-level programming language that powers the dynamic behavior of websites. It is essential for creating interactive web applications and is supported by all modern browsers.',
      features: [
        'Dynamic: Build interactive web applications.',
        'Cross-Platform: Runs on any browser.',
        'Versatile: Suitable for frontend, backend, and full-stack development.',
        'Rich Ecosystem: Libraries and frameworks for every use case.',
        'Community Support: One of the largest developer communities.',
      ],
    },
    {
      name: 'TypeScript',
      imgSrc: './typescript.svg',
      alt: 'TypeScript',
      content: 'TypeScript',
      width: 50,
      title: 'TypeScript: JavaScript with Superpowers',
      description:
        'TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It enhances code reliability and maintainability by introducing static typing and advanced development tools.',
      features: [
        'Static Typing: Catch errors at compile time.',
        'JavaScript Compatibility: Fully interoperable with JavaScript.',
        'Improved Tooling: Enhanced IDE support and autocompletion.',
        'Scalable: Ideal for large codebases.',
        'Community Adoption: Used by frameworks like Angular and libraries like React.',
      ],
    },
    {
      name: 'React.js',
      imgSrc: './react-native.svg',
      alt: 'React.js',
      content: 'React.js',
      title: 'React.js: Build Dynamic User Interfaces',
      description:
        'React.js is a popular JavaScript library for building interactive user interfaces. Developed by Facebook, it allows developers to create reusable UI components for fast and efficient web development.',
      features: [
        'Component-Based: Build encapsulated components for reusable UIs.',
        'Virtual DOM: Optimized rendering for better performance.',
        'Declarative: Simplifies the development of dynamic interfaces.',
        'Ecosystem: Wide range of tools and libraries like Redux.',
        'Community: Supported by a vast and active developer base.',
      ],
    },
    {
      name: 'Angular',
      imgSrc: './angular-icon.svg',
      alt: 'Angular',
      content: 'Angular',
      title: 'Angular: Framework for Scalable Web Applications',
      description:
        'Angular is a TypeScript-based framework developed by Google for building dynamic, scalable web applications. It provides a robust set of tools for enterprise-level development.',
      features: [
        'Two-Way Data Binding: Syncs data between model and view.',
        'Dependency Injection: Simplifies service management.',
        'Modular Architecture: Organize your app into cohesive modules.',
        'Rich Features: Includes routing, forms, and HTTP client.',
        'Google Support: Backed by Google with regular updates.',
      ],
    },
    {
      name: 'Vue.js',
      imgSrc: './vue-js.svg',
      alt: 'Vue.js',
      content: 'Vue.js',
      title: 'Vue.js: The Progressive JavaScript Framework',
      description:
        'Vue.js is an open-source JavaScript framework for building user interfaces. Its simplicity and flexibility make it ideal for both small-scale and large-scale applications.',
      features: [
        'Lightweight: Easy to integrate into existing projects.',
        'Reactive Data Binding: Automatically updates the UI on data changes.',
        'Component-Based: Build reusable and maintainable components.',
        'Versatile: Can be used for single-page apps or just a part of a page.',
        'Community-Driven: Large and growing community support.',
      ],
    },
    {
      name: 'Bootstrap',
      imgSrc: './bootstrap-icon.svg',
      alt: 'Bootstrap',
      content: 'Bootstrap',
      title: 'Bootstrap: CSS Framework for Responsive Design',
      description:
        'Bootstrap is a powerful front-end framework for building responsive, mobile-first websites. It includes a variety of pre-designed components and utilities for faster development.',
      features: [
        'Responsive Grid: Build layouts for all screen sizes.',
        'Pre-Built Components: Buttons, modals, carousels, and more.',
        'Customizable: Modify styles using Sass variables.',
        'Cross-Browser: Consistent design across browsers.',
        'Active Community: Wide range of themes and extensions available.',
      ],
    },
    {
      name: 'Material-UI',
      imgSrc: './material-ui.svg',
      alt: 'Material-UI',
      content: 'Material-ui',
      title: 'Material-UI: React Components for Material Design',
      description:
        'Material-UI is a library of React components that implement Google’s Material Design principles. It simplifies the creation of beautiful and functional user interfaces.',
      features: [
        'Material Design: Implements Google’s design guidelines.',
        'Customizable: Easily modify styles and themes.',
        'Component Rich: Includes inputs, buttons, dialogs, and more.',
        'Responsive Design: Built for mobile-first development.',
        'Active Community: Regular updates and community contributions.',
      ],
    },
    {
      name: 'Redux',
      imgSrc: './redux.svg',
      alt: 'Redux',
      content: 'Redux',
      title: 'Redux: Predictable State Management',
      description:
        'Redux is a JavaScript library for managing and centralizing application state. It works well with React and other frameworks, enabling predictable and maintainable state management.',
      features: [
        'Centralized State: Manage the entire state in a single store.',
        'Predictable: Actions and reducers make state changes predictable.',
        'Debugging: Easily track and log state changes.',
        'Flexible: Can be used with any JavaScript framework.',
        'Community: Supported by a robust ecosystem of tools and extensions.',
      ],
    },
    {
      name: 'jQuery',
      imgSrc: './jquery-icon.svg',
      alt: 'jQuery',
      content: 'Jquery',
      title: 'jQuery: Simplify JavaScript Development',
      description:
        'jQuery is a fast, small, and feature-rich JavaScript library. It simplifies HTML document manipulation, event handling, and animations, making web development easier.',
      features: [
        'DOM Manipulation: Simplify traversing and modifying the DOM.',
        'Event Handling: Cross-browser event handling made easy.',
        'Animations: Create custom animations with minimal effort.',
        'AJAX Support: Simplify asynchronous HTTP requests.',
        'Wide Adoption: Extensive plugins and community support.',
      ],
    },
  ],
  [
    {
      name: 'JavaScript',
      imgSrc: './javascript.svg',
      alt: 'Backend',
      content: 'JavaScript',
      title: 'JavaScript: Powering Full-Stack Development',
      description:
        'JavaScript is a versatile programming language used for both frontend and backend development. With the advent of Node.js, it has become a powerful tool for building server-side applications.',
      features: [
        'Full-Stack: Use the same language for both frontend and backend.',
        'Event-Driven: Efficient handling of concurrent requests.',
        'Rich Ecosystem: Thousands of libraries and frameworks available.',
        'Asynchronous: Built-in support for asynchronous programming.',
        'Cross-Platform: Runs on servers, desktops, and IoT devices.',
      ],
    },
    {
      name: 'TypeScript',
      imgSrc: './typescript.svg',
      alt: 'Backend',
      content: 'TypeScript',
      title: 'TypeScript: Scalable Backend Solutions',
      description:
        'TypeScript enhances JavaScript with static typing, making it ideal for large-scale backend applications. Its type system improves reliability and code quality.',
      features: [
        'Static Typing: Minimize runtime errors.',
        'Tooling: Advanced IDE support for better productivity.',
        'Compatibility: Compiles to plain JavaScript.',
        'Scalable: Perfect for large and complex backend projects.',
        'Popular Frameworks: Used with NestJS and other backend frameworks.',
      ],
    },
    {
      name: 'Java',
      imgSrc: './java.svg',
      alt: 'Backend',
      content: 'Java',
      title: 'Java: Enterprise-Grade Backend Development',
      description:
        'Java is a versatile and secure programming language used for developing scalable backend systems. It is the backbone of many enterprise-level applications.',
      features: [
        'Platform-Independent: Write once, run anywhere.',
        'Robust and Secure: Built for reliability and security.',
        'Concurrency: Excellent support for multi-threaded applications.',
        'Ecosystem: Rich libraries and frameworks like Spring and Hibernate.',
        'Enterprise-Ready: Used by large-scale businesses globally.',
      ],
    },
    {
      name: 'Python',
      imgSrc: './python.svg',
      alt: 'Backend',
      content: 'Python',
      title: 'Python: Flexible and Versatile Backend Language',
      description:
        'Python is known for its simplicity and readability, making it a favorite for backend development. It supports rapid development with robust frameworks like Django and Flask.',
      features: [
        'Easy to Learn: Perfect for beginners and experts alike.',
        'Rapid Development: Write less code and build faster.',
        'Rich Libraries: Extensive libraries for various needs.',
        'Frameworks: Django and Flask for efficient backend development.',
        'Community Support: Large and active developer community.',
      ],
    },
    {
      name: 'PHP',
      imgSrc: './php-icon.svg',
      alt: 'Backend',
      content: 'PHP',
      title: 'PHP: The Language of the Web',
      description:
        'PHP is a widely-used open-source scripting language designed for web development. It is especially suited for creating dynamic and interactive websites.',
      features: [
        'Web-Focused: Built for creating server-side web applications.',
        'Simple Syntax: Easy to learn and implement.',
        'CMS Support: Powers platforms like WordPress and Drupal.',
        'Database Integration: Seamless connection with MySQL, PostgreSQL, and more.',
        'Open-Source: Free and widely supported by the community.',
      ],
    },
    {
      name: 'Node.js',
      imgSrc: './node-js.svg',
      alt: 'Backend',
      content: 'Node.js',
      title: 'Node.js: Fast and Scalable Server-Side Platform',
      description:
        'Node.js is a runtime environment that enables server-side execution of JavaScript. It is known for its event-driven, non-blocking I/O model, perfect for building scalable network applications.',
      features: [
        'Asynchronous: Handles multiple requests efficiently.',
        'Event-Driven: Ideal for real-time applications.',
        'Single Language: Use JavaScript for both frontend and backend.',
        'Package Manager: NPM provides thousands of modules.',
        'Community Support: Vast and active developer base.',
      ],
    },
    {
      name: 'Django',
      imgSrc: './django.svg',
      alt: 'Backend',
      content: 'Django',
      title: 'Django: The Web Framework for Perfectionists',
      description:
        'Django is a high-level Python framework that simplifies backend development. It encourages rapid development and clean, pragmatic design.',
      features: [
        'Rapid Development: Focus on building applications quickly.',
        'Scalability: Handles high traffic with ease.',
        'Security: Built-in protection against common vulnerabilities.',
        'Versatile: Supports a wide range of web applications.',
        'Admin Panel: Auto-generated, fully customizable admin interface.',
      ],
    },
    {
      name: 'Laravel',
      imgSrc: './laravel.svg',
      alt: 'Backend',
      content: 'Laravel',
      title: 'Laravel: Elegant PHP Framework',
      description:
        'Laravel is a PHP framework known for its elegant syntax and developer-friendly tools. It simplifies backend tasks like routing, authentication, and caching.',
      features: [
        'MVC Architecture: Clean separation of logic and presentation.',
        'Blade Templating: Lightweight and efficient template engine.',
        'Eloquent ORM: Simplified database management.',
        'Community Support: Large and active user base.',
        'Rich Features: Queues, caching, and more built-in.',
      ],
    },
    {
      name: 'MySQL',
      imgSrc: './mysql.svg',
      alt: 'Backend',
      content: 'MySQL',
      title: 'MySQL: Reliable Relational Database',
      description:
        'MySQL is an open-source relational database management system. It is widely used for web applications and supports large-scale data storage and retrieval.',
      features: [
        'High Performance: Optimized for speed and efficiency.',
        'Scalability: Handles small and large-scale databases.',
        'Cross-Platform: Compatible with multiple operating systems.',
        'Data Security: Ensures secure data handling.',
        'Widely Used: Backbone of many popular web platforms.',
      ],
    },
    {
      name: 'MongoDB',
      imgSrc: './mongo.svg',
      alt: 'Backend',
      content: 'MongoDB',
      title: 'MongoDB: Flexible NoSQL Database',
      description:
        'MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It is ideal for applications requiring fast and scalable database solutions.',
      features: [
        'Document-Based: Stores data in JSON-like structures.',
        'Scalable: Handles large volumes of data effortlessly.',
        'Flexible Schema: No predefined schema requirements.',
        'High Performance: Optimized for read and write operations.',
        'Wide Adoption: Popular choice for modern applications.',
      ],
    },
  ],

  [
    {
      name: 'TensorFlow',
      imgSrc: './tenserflow.svg',
      alt: 'Machine Learning',
      content: 'TensorFlow',
      title: 'TensorFlow: End-to-End Machine Learning Platform',
      description:
        'TensorFlow is a comprehensive open-source platform for machine learning. Developed by Google, it is widely used for building and deploying ML models.',
      features: [
        'Versatility: Supports deep learning, reinforcement learning, and more.',
        'Scalability: Suitable for large-scale machine learning projects.',
        'Wide Adoption: Used by industry leaders and researchers.',
        'Tools: Includes TensorBoard for visualization and debugging.',
        'Flexibility: Works on mobile, edge, and cloud environments.',
      ],
    },
    {
      name: 'PyTorch',
      imgSrc: './pytorch.svg',
      alt: 'Machine Learning',
      content: 'PyTorch',
      title: 'PyTorch: Dynamic Deep Learning Framework',
      description:
        'PyTorch is an open-source machine learning framework that excels in dynamic computation and ease of use. It is popular among researchers and developers for deep learning.',
      features: [
        'Dynamic Computation: Build and modify models on-the-fly.',
        'Ease of Use: Pythonic framework with an intuitive API.',
        'Strong Community: Actively supported and growing rapidly.',
        'Research Focus: Preferred for experimentation and prototyping.',
        'Integration: Works seamlessly with tools like NumPy and SciPy.',
      ],
    },
    {
      name: 'SciKit-Learn',
      imgSrc: './scikit-learn.svg',
      alt: 'Machine Learning',
      content: 'SciKit-Learn',
      title: 'SciKit-Learn: Simplifying Machine Learning',
      description:
        'SciKit-Learn is a Python library for machine learning, built on top of NumPy, SciPy, and Matplotlib. It is perfect for data analysis and predictive modeling.',
      features: [
        'Ease of Use: Simple and consistent API for machine learning.',
        'Comprehensive: Covers classification, regression, and clustering.',
        'Efficient: Optimized for performance and scalability.',
        'Integration: Works well with other Python libraries.',
        'Visualization: Tools for data exploration and presentation.',
      ],
    },
    {
      name: 'Keras',
      imgSrc: './Keras.svg',
      alt: 'Machine Learning',
      content: 'Keras',
      title: 'Keras: User-Friendly Deep Learning Framework',
      description:
        'Keras is an open-source neural network library that focuses on user-friendliness and modularity. It is a high-level API for TensorFlow.',
      features: [
        'Ease of Use: Intuitive and accessible for beginners.',
        'Modularity: Flexible architecture for building custom models.',
        'Compatibility: Runs seamlessly with TensorFlow, Theano, and CNTK.',
        'Fast Prototyping: Quickly build and test neural networks.',
        'Community: Backed by a large and active developer base.',
      ],
    },
  ],

  [
    {
      name: 'TensorFlow',
      imgSrc: './tenserflow.svg',
      alt: 'Machine Learning',
      content: 'TensorFlow',
      title: 'TensorFlow: End-to-End Machine Learning Platform',
      description:
        'TensorFlow is an open-source platform designed by Google for developing and deploying machine learning models at scale.',
      features: [
        'Scalability: Ideal for large-scale ML projects across multiple platforms.',
        'Comprehensive Tools: Includes TensorBoard for model visualization.',
        'Flexibility: Supports deep learning, NLP, computer vision, and more.',
        'Cross-Platform: Deploy on mobile, web, and edge devices.',
        'Extensive Community: Backed by Google and an active global user base.',
      ],
    },
    {
      name: 'PyTorch',
      imgSrc: './pytorch.svg',
      alt: 'Machine Learning',
      content: 'PyTorch',
      title: 'PyTorch: Dynamic Deep Learning Framework',
      description:
        'PyTorch is an open-source machine learning framework known for its dynamic computation graph and ease of use, making it a favorite for research and production.',
      features: [
        'Dynamic Graphs: Modify models dynamically during runtime.',
        'Developer-Friendly: Intuitive and Pythonic API.',
        'Research-Driven: Frequently used for cutting-edge ML research.',
        'Scalable: Easily transition from research to production.',
        'Strong Ecosystem: Seamlessly integrates with libraries like NumPy.',
      ],
    },
    {
      name: 'OpenCV',
      imgSrc: './opencv.svg',
      alt: 'Machine Learning',
      content: 'OpenCV',
      title: 'OpenCV: Open Source Computer Vision Library',
      description:
        'OpenCV is an open-source library designed for computer vision and image processing, widely used in robotics, AR, and ML applications.',
      features: [
        'Image Processing: Tools for feature detection, filtering, and enhancement.',
        'Real-Time: Supports real-time applications like facial recognition.',
        'Cross-Platform: Works on Windows, macOS, Linux, and mobile devices.',
        'Extensive Modules: Includes deep learning and machine learning utilities.',
        'Community Support: Large user base with extensive documentation.',
      ],
    },
    {
      name: 'Keras',
      imgSrc: './Keras.svg',
      alt: 'Machine Learning',
      content: 'Keras',
      title: 'Keras: User-Friendly Deep Learning Framework',
      description:
        'Keras is a high-level neural networks API running on top of TensorFlow, known for its simplicity and modularity.',
      features: [
        'Ease of Use: Intuitive design for beginners and experts.',
        'Flexibility: Highly customizable for building complex models.',
        'Fast Prototyping: Quickly build and test deep learning models.',
        'Compatibility: Works with TensorFlow, Theano, and other backends.',
        'Active Community: Large ecosystem of developers and resources.',
      ],
    },
  ],

  [
    {
      name: 'Apache Spark',
      imgSrc: './spark.svg',
      alt: 'Machine Learning',
      content: 'Apache Spark',
      title: 'Apache Spark: Unified Analytics Engine for Big Data',
      description:
        'Apache Spark is an open-source distributed computing system known for its speed, ease of use, and advanced analytics capabilities.',
      features: [
        'Speed: Lightning-fast data processing.',
        'Unified Engine: Handles batch, streaming, and SQL processing.',
        'Scalable: Process data across clusters efficiently.',
        'Rich APIs: Supports Java, Scala, Python, R, and SQL.',
        'Machine Learning: Built-in MLlib for scalable machine learning algorithms.',
      ],
    },
    {
      name: 'Hadoop',
      imgSrc: './hadoop.svg',
      alt: 'Machine Learning',
      content: 'Hadoop',
      title: 'Hadoop: Framework for Distributed Storage and Processing',
      description:
        'Apache Hadoop is an open-source framework that allows for distributed storage and processing of large data sets across clusters of computers.',
      features: [
        'Distributed Storage: Uses HDFS for fault-tolerant storage.',
        'Scalable: Handles petabytes of data seamlessly.',
        'Ecosystem: Includes MapReduce, YARN, Hive, Pig, and more.',
        'Cost-Effective: Runs on commodity hardware.',
        'Open-Source: Backed by a large community for continuous improvement.',
      ],
    },
    {
      name: 'Apache Flink',
      imgSrc: './flink.svg',
      alt: 'Machine Learning',
      content: 'Apache Flink',
      title: 'Apache Flink: Real-Time Stream Processing Framework',
      description:
        'Apache Flink is a robust stream processing framework for real-time data analysis and processing, providing low latency and high throughput.',
      features: [
        'Stream Processing: Processes data in real-time with stateful computations.',
        'Scalable: Designed for distributed environments.',
        'Fault Tolerance: Provides exactly-once consistency guarantees.',
        'Flexible APIs: Supports Java, Scala, and Python.',
        'Integration: Works seamlessly with Kafka, Cassandra, and other tools.',
      ],
    },
    {
      name: 'Apache Storm',
      imgSrc: './storm.svg',
      alt: 'Machine Learning',
      content: 'Apache Storm',
      title: 'Apache Storm: Real-Time Processing System',
      description:
        'Apache Storm is an open-source distributed real-time computation system, ideal for processing large streams of data quickly and efficiently.',
      features: [
        'Real-Time: Processes data streams with low latency.',
        'Scalable: Handles millions of messages per second.',
        'Distributed: Built for fault tolerance and resilience.',
        'Easy to Use: Simple programming model for rapid development.',
        'Integration: Supports integration with Kafka, HDFS, and other platforms.',
      ],
    },
    {
      name: 'Apache Kafka',
      imgSrc: './kafka.svg',
      alt: 'Machine Learning',
      content: 'Apache Kafka',
      title: 'Apache Kafka: Distributed Event Streaming Platform',
      description:
        'Apache Kafka is a distributed event streaming platform designed for high-throughput and fault-tolerant real-time data processing.',
      features: [
        'Event Streaming: Publish, subscribe, and process event streams in real-time.',
        'Scalable: Handles terabytes of data without compromising performance.',
        'Durability: Ensures data persistence with fault tolerance.',
        'Flexible APIs: Supports Java, Scala, Python, and more.',
        'Ecosystem: Integrates with Flink, Storm, Spark, and other tools.',
      ],
    },
  ],

  [
    {
      name: 'Shopify',
      imgSrc: './shopify.svg',
      alt: 'Backend',
      content: 'Shopify',
      title: 'Shopify: Build Your Online Store Easily',
      description:
        'Shopify is a leading e-commerce platform that allows businesses to create, customize, and manage online stores effortlessly.',
      features: [
        'Ease of Use: Simple setup and user-friendly interface.',
        'Customizable Themes: Choose from a variety of professional templates.',
        'Secure Payments: Supports multiple payment gateways.',
        'Marketing Tools: Built-in SEO and marketing capabilities.',
        'App Ecosystem: Extensive app store for additional functionality.',
      ],
    },
    {
      name: 'Magento',
      imgSrc: './magento.svg',
      alt: 'Backend',
      content: 'Magento',
      title: 'Magento: Flexible and Scalable E-Commerce Platform',
      description:
        'Magento is an open-source e-commerce platform designed for businesses that require advanced customization and scalability.',
      features: [
        'Customizable: Tailor your store to meet unique needs.',
        'Scalable: Handles large catalogs and high traffic.',
        'SEO Friendly: Built-in tools to improve search engine visibility.',
        'Extensions: Thousands of plugins and themes available.',
        'Analytics: Advanced reporting and business intelligence tools.',
      ],
    },
    {
      name: 'WordPress',
      imgSrc: './wordpress-icon.svg',
      alt: 'Backend',
      content: 'WordPress',
      title: 'WordPress: The Ultimate CMS for Websites and Blogs',
      description:
        'WordPress is a powerful content management system (CMS) that powers websites and blogs with endless customization options.',
      features: [
        'Ease of Use: User-friendly interface for beginners and professionals.',
        'Themes and Plugins: Thousands of free and premium options.',
        'SEO Ready: Built-in and plugin-based SEO tools.',
        'Versatile: Suitable for blogs, business websites, and e-commerce.',
        'Community: Supported by a large global community.',
      ],
    },
    {
      name: 'WooCommerce',
      imgSrc: './woocommerce.svg',
      alt: 'Backend',
      content: 'WooCommerce',
      title: 'WooCommerce: E-Commerce for WordPress',
      description:
        'WooCommerce is a plugin for WordPress that transforms websites into fully functional online stores.',
      features: [
        'Integration: Seamless with WordPress.',
        'Customizable: Modify with themes and plugins.',
        'Payment Options: Supports numerous payment gateways.',
        'Analytics: In-depth reporting for sales and customer insights.',
        'Extensions: Add features like subscriptions, bookings, and more.',
      ],
    },
    {
      name: 'Big Commerce',
      imgSrc: './bigcommerce.svg',
      alt: 'Backend',
      content: 'Big Commerce',
      title: 'Big Commerce: Enterprise-Grade E-Commerce Platform',
      description:
        'Big Commerce is a robust platform for businesses looking for scalability and enterprise-level features.',
      features: [
        'Multi-Channel: Sell on marketplaces like Amazon and eBay.',
        'Customizable: Build unique storefronts with ease.',
        'Scalability: Handles growing businesses seamlessly.',
        'SEO Optimized: Advanced SEO tools and options.',
        'Secure: PCI-compliant and highly reliable.',
      ],
    },
    {
      name: 'Presta Shop',
      imgSrc: './prestashop.svg',
      alt: 'Backend',
      content: 'Presta Shop',
      title: 'PrestaShop: Open-Source E-Commerce Platform',
      description:
        'PrestaShop is an open-source solution for businesses to build and manage online stores.',
      features: [
        'Customizable: Modify with modules and themes.',
        'Multi-Language: Supports internationalization.',
        'Inventory Management: Streamlined product management tools.',
        'Community: Backed by a large developer and user community.',
        'Cost-Effective: Free to use with optional paid modules.',
      ],
    },
    {
      name: 'Open Kart',
      imgSrc: './opencart.svg',
      alt: 'Backend',
      content: 'Open Kart',
      title: 'OpenCart: Free and Open-Source Shopping Cart System',
      description:
        'OpenCart is a lightweight and feature-rich solution for creating online stores with ease.',
      features: [
        'Ease of Use: Simple installation and setup.',
        'Extensions: Thousands of free and premium extensions.',
        'Multi-Store: Manage multiple stores from a single admin interface.',
        'Payment Gateways: Supports a wide range of payment options.',
        'Open-Source: Completely free with no licensing fees.',
      ],
    },
    {
      name: 'Salesforce Commerce Cloud',
      imgSrc: './salesforce.svg',
      alt: 'Backend',
      content: 'Salesforce Commerce Cloud',
      title: 'Salesforce Commerce Cloud: Cloud-Based E-Commerce Solution',
      description:
        'Salesforce Commerce Cloud offers a cloud-based e-commerce platform with powerful AI-driven personalization features.',
      features: [
        'AI-Driven: Personalize user experiences with AI insights.',
        'Multi-Channel: Unified shopping experiences across channels.',
        'Scalability: Designed for enterprises with high traffic.',
        'Marketing Tools: Built-in marketing and promotional features.',
        'Secure: Enterprise-grade security and reliability.',
      ],
    },
    {
      name: 'React Commerce',
      imgSrc: './react-native.svg',
      alt: 'Backend',
      content: 'React Commerce',
      title: 'React Commerce: Dynamic E-Commerce with React',
      description:
        'React Commerce leverages React.js to create dynamic and high-performing e-commerce applications.',
      features: [
        'Dynamic UI: Modern and interactive interfaces.',
        'Reusable Components: Modular development approach.',
        'Performance: Optimized for fast rendering and user experience.',
        'Integration: Easily integrates with APIs and backend services.',
        'SEO Friendly: Helps improve search engine rankings.',
      ],
    },
    {
      name: 'Angular Commerce',
      imgSrc: './angular-icon.svg',
      alt: 'Backend',
      content: 'Angular Commerce',
      title: 'Angular Commerce: Build E-Commerce with Angular',
      description:
        'Angular Commerce utilizes Angular’s robust framework to deliver scalable and feature-rich e-commerce solutions.',
      features: [
        'Modular Architecture: Scalable and maintainable structure.',
        'Dynamic Components: Seamless user experience.',
        'Cross-Platform: Responsive design for web and mobile.',
        'Integration: Works with various APIs and payment gateways.',
        'Security: Built-in features for secure applications.',
      ],
    },
    {
      name: 'Vue StoreFront',
      imgSrc: './Vuestorefront.svg',
      alt: 'Backend',
      content: 'Vue StoreFront',
      title: 'Vue Storefront: Headless PWA for E-Commerce',
      description:
        'Vue Storefront is a platform-agnostic PWA solution for building fast and mobile-friendly e-commerce stores.',
      features: [
        'Headless Architecture: Connects seamlessly to any backend.',
        'PWA: Delivers an app-like experience on the web.',
        'Customization: Fully customizable frontend.',
        'Performance: Optimized for speed and SEO.',
        'Integration: Compatible with Magento, Shopify, and other platforms.',
      ],
    },
    {
      name: 'Laravel',
      imgSrc: './laravel.svg',
      alt: 'Backend',
      content: 'Laravel',
      title: 'Laravel: Elegant PHP Framework',
      description:
        'Laravel is a PHP framework for building robust and scalable web applications, including e-commerce platforms.',
      features: [
        'MVC Architecture: Clear separation of logic and UI.',
        'Routing: Simplified and powerful URL routing system.',
        'Security: Built-in mechanisms for securing applications.',
        'Eloquent ORM: Intuitive database interactions.',
        'Extensibility: Wide range of third-party packages.',
      ],
    },
  ],
];

function IconWithName({
  item,
  idx,
  setIsModalOpen,
  setModalData,
}: {
  item: any;
  idx: number;
  setIsModalOpen: any;
  setModalData: any;
}) {
  function handleOnClick() {
    const data = {
      name: item.name,
      title: item.title,
      description: item.description,
      features: item.features,
    };

    setModalData(data);
    setIsModalOpen(true);
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: idx * 0.1 }}
      onClick={handleOnClick}
      className="flex cursor-pointer items-center gap-3 rounded bg-transparent p-3 duration-200 hover:bg-neutral-800 lg:flex"
    >
      <img
        className="h-12 w-auto object-contain"
        src={`./${item.imgSrc}`}
        alt="Backend"
      />
      <h1 className="mt-3">{item.name}</h1>
    </motion.div>
  );
}

function TechonologyDetailModal({
  open,
  setOpen,
  data,
}: {
  open: boolean;
  setOpen: any;
  data: any;
}) {
  return (
    <Modal
      open={open}
      title=""
      height=""
      width={900}
      // onOk={handleOk}
      onCancel={() => setOpen(false)}
      styles={{
        content: {
          backgroundColor: '#404040',
          color: 'white',
          borderRadius: 25,
        },
      }}
      footer={[]}
    >
      <div className="mt-6 flex w-full flex-col gap-4 px-2 text-white md:px-4">
        <p className="text-3xl font-medium text-white">
          {data?.title || 'Title'}
        </p>
        <p className="text-gray-300">{data?.description || 'Description'}</p>

        <div className="mt-2">
          <p className="text-lg font-semibold">Why {data?.name}?</p>
          <ul className="ml-4 mt-1 flex list-disc flex-col gap-1">
            {data?.features?.map((feature: any, idx: number) => (
              <li key={idx} className="text-gray-300">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
}
