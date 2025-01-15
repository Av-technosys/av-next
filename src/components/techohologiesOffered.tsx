import React, { useState } from 'react';
import { motion } from 'framer-motion';
const Tabs = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState(0);

  // Array of tab labels and content for simplicity
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
          <div className="grid grid-cols-2 md:grid-cols-5 lg:gap-8">
            {TechonologyData[0].map((item, index) => (
              <IconWithName idx={index} item={item} key={item.name} />
            ))}
          </div>
        )}

        {activeTab === 1 && (
          <div className="grid grid-cols-2 md:grid-cols-5 lg:gap-8">
            {TechonologyData[1].map((item, index) => (
              <IconWithName idx={index} item={item} key={item.name} />
            ))}
          </div>
        )}
        {activeTab === 2 && (
          <div className="grid grid-cols-2 md:grid-cols-5 lg:gap-8">
            {TechonologyData[2].map((item, index) => (
              <IconWithName idx={index} item={item} key={item.name} />
            ))}
          </div>
        )}
        {activeTab === 3 && (
          <div className="grid grid-cols-2 md:grid-cols-5 lg:gap-8">
            {TechonologyData[3].map((item, index) => (
              <IconWithName idx={index} item={item} key={item.name} />
            ))}
          </div>
        )}
        {activeTab === 4 && (
          <div className="grid grid-cols-2 md:grid-cols-5 lg:gap-8">
            {TechonologyData[4].map((item, index) => (
              <IconWithName idx={index} item={item} key={item.name} />
            ))}
          </div>
        )}
        {activeTab === 5 && (
          <div className="grid grid-cols-2 md:grid-cols-5 lg:gap-8">
            {TechonologyData[5].map((item, index) => (
              <IconWithName idx={index} item={item} key={item.name} />
            ))}
          </div>
        )}
        {activeTab === 6 && (
          <div className="grid grid-cols-2 md:grid-cols-5 lg:gap-8">
            {TechonologyData[6].map((item, index) => (
              <IconWithName idx={index} item={item} key={item.name} />
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
      alt: 'React Native',
      content: 'React Native',
    },
    {
      name: 'Xamarin',
      imgSrc: './xamarin-icon.svg',
      alt: 'Xamarin',
      content: 'Xamarin',
    },
    {
      name: 'Ionic',
      imgSrc: './Ionic.svg',
      alt: 'Ionic',
      content: 'Ionic',
    },
    {
      name: 'Kotlin',
      imgSrc: './kotlin.svg',
      alt: 'Kotlin',
      content: 'Kotlin',
    },
    {
      name: 'Flutter',
      imgSrc: './flutter.svg',
      alt: 'Flutter',
      content: 'Flutter',
    },
    {
      name: 'Java',
      imgSrc: './java.svg',
      alt: 'Java',
      content: 'Java',
    },
    {
      name: 'Xcode',
      imgSrc: './xcode.svg',
      alt: 'Xcode',
      content: 'Xcode',
    },
    {
      name: 'Swift',
      imgSrc: './swift.svg',
      alt: 'Swift',
      content: 'Swift',
    },
  ],

  [
    {
      name: 'JavaScript',
      imgSrc: './javascript.svg',
      alt: 'JavaScript',
      content: 'JavaScript',
      width: 50,
    },
    {
      name: 'TypeScript',
      imgSrc: './typescript.svg',
      alt: 'TypeScript',
      content: 'TypeScript',
      width: 50,
    },
    {
      name: 'React.js',
      imgSrc: './react-native.svg',
      alt: 'React.js',
      content: 'React.js',
    },
    {
      name: 'Angular',
      imgSrc: './angular-icon.svg',
      alt: 'Angular',
      content: 'Angular',
    },
    {
      name: 'Vue.js',
      imgSrc: './vue-js.svg',
      alt: 'Vue.js',
      content: 'Vue.js',
    },
    {
      name: 'Bootstrap',
      imgSrc: './bootstrap-icon.svg',
      alt: 'Bootstrap',
      content: 'Bootstrap',
    },
    {
      name: 'Material-UI',
      imgSrc: './material-ui.svg',
      alt: 'Material-UI',
      content: 'Material-ui',
    },
    {
      name: 'Redux',
      imgSrc: './redux.svg',
      alt: 'Redux',
      content: 'Redux',
    },
    {
      name: 'jQuery',
      imgSrc: './jquery-icon.svg',
      alt: 'jQuery',
      content: 'Jquery',
    },
  ],
  [
    {
      name: 'JavaScript',
      imgSrc: './javascript.svg',
      alt: 'Backend',
      content: 'JavaScript',
    },
    {
      name: 'TypeScript',
      imgSrc: './typescript.svg',
      alt: 'Backend',
      content: 'TypeScript',
    },
    {
      name: 'Java',
      imgSrc: './java.svg',
      alt: 'Backend',
      content: 'Java',
    },
    {
      name: 'Python',
      imgSrc: './python.svg',
      alt: 'Backend',
      content: 'Python',
    },
    {
      name: 'PHP',
      imgSrc: './php-icon.svg',
      alt: 'Backend',
      content: 'PHP',
    },
    {
      name: 'Node.js',
      imgSrc: './node-js.svg',
      alt: 'Backend',
      content: 'Node.js',
    },
    {
      name: 'Django',
      imgSrc: './django.svg',
      alt: 'Backend',
      content: 'Django',
    },
    {
      name: 'Laravel',
      imgSrc: './laravel.svg',
      alt: 'Backend',
      content: 'Laravel',
    },
    {
      name: 'MySQL',
      imgSrc: './mysql.svg',
      alt: 'Backend',
      content: 'MySQL',
    },
    {
      name: 'MongoDB',
      imgSrc: './mongo.svg',
      alt: 'Backend',
      content: 'MongoDB',
    },
  ],

  [
    {
      name: 'TensorFlow',
      imgSrc: './tenserflow.svg',
      alt: 'Machine Learning',
      content: 'Tenser Flow',
    },
    {
      name: 'PyTorch',
      imgSrc: './pytorch.svg',
      alt: 'Machine Learning',
      content: 'PyTorch',
    },
    {
      name: 'SciKit-Learn',
      imgSrc: './scikit-learn.svg',
      alt: 'Machine Learning',
      content: 'SciKit-Learn',
    },
    {
      name: 'Keras',
      imgSrc: './Keras.svg',
      alt: 'Machine Learning',
      content: 'Keras',
    },
  ],

  [
    {
      name: 'TensorFlow',
      imgSrc: './tenserflow.svg',
      alt: 'Machine Learning',
      content: 'Tenser Flow',
    },
    {
      name: 'PyTorch',
      imgSrc: './pytorch.svg',
      alt: 'Machine Learning',
      content: 'PyTorch',
    },
    {
      name: 'OpenCV',
      imgSrc: './opencv.svg',
      alt: 'Machine Learning',
      content: 'Open CV',
    },
    {
      name: 'Keras',
      imgSrc: './Keras.svg',
      alt: 'Machine Learning',
      content: 'Keras',
    },
  ],

  [
    {
      name: 'Apache Spark',
      imgSrc: './spark.svg',
      alt: 'Machine Learning',
      content: 'Apache Spark',
    },
    {
      name: 'Hadoop',
      imgSrc: './hadoop.svg',
      alt: 'Machine Learning',
      content: 'Hadoop',
    },
    {
      name: 'Apache Flink',
      imgSrc: './flink.svg',
      alt: 'Machine Learning',
      content: 'Apache Flink',
    },
    {
      name: 'Apache Storm',
      imgSrc: './storm.svg',
      alt: 'Machine Learning',
      content: 'Apache Storm',
    },
    {
      name: 'Apache Kafka',
      imgSrc: './kafka.svg',
      alt: 'Machine Learning',
      content: 'Apache Kafka',
    },
  ],
  [
    {
      name: 'Shopify',
      imgSrc: './shopify.svg',
      alt: 'Backend',
      content: 'Shopify',
    },
    {
      name: 'Magento',
      imgSrc: './magento.svg',
      alt: 'Backend',
      content: 'Magento',
    },
    {
      name: 'WordPress',
      imgSrc: './wordpress-icon.svg',
      alt: 'Backend',
      content: 'Wordpress',
    },
    {
      name: 'WooCommerce',
      imgSrc: './woocommerce.svg',
      alt: 'Backend',
      content: 'WooCommerce',
    },
    {
      name: 'Big Commerce',
      imgSrc: './bigcommerce.svg',
      alt: 'Backend',
      content: 'Big Commerce',
    },
    {
      name: 'Presta Shop',
      imgSrc: './prestashop.svg',
      alt: 'Backend',
      content: 'Presta Shop',
    },
    {
      name: 'Open Kart',
      imgSrc: './opencart.svg',
      alt: 'Backend',
      content: 'Open Kart',
    },
    {
      name: 'Salesforce Commerce Cloud',
      imgSrc: './salesforce.svg',
      alt: 'Backend',
      content: 'Salesforce Commerce Cloud',
    },
    {
      name: 'React Commerce',
      imgSrc: './react-native.svg',
      alt: 'Backend',
      content: 'React Commerce',
    },
    {
      name: 'Angular Commerce',
      imgSrc: './angular-icon.svg',
      alt: 'Backend',
      content: 'Angular Commerce',
    },
    {
      name: 'Vue StoreFront',
      imgSrc: './Vuestorefront.svg',
      alt: 'Backend',
      content: 'Vue StoreFront',
    },
    {
      name: 'Laravel',
      imgSrc: './laravel.svg',
      alt: 'Backend',
      content: 'Laravel',
    },
  ],
];

function IconWithName({ item, idx }: { item: any; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: idx * 0.1 }}
      className="mt-[56px] flex items-center gap-3 lg:flex"
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
