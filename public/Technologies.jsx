import React, { useState } from "react";
import angularlogo from "../Assets/angular.svg";
import bigcommercelogo from "../Assets/bigcommerce.svg";
import bootstraplogo from "../Assets/bootstrap.svg";
import djangologo from "../Assets/django.svg";
import flutterlogo from "../Assets/flutter.svg";
import flinklogo from "../Assets/flink.svg";
import hadooplogo from "../Assets/hadoop.svg";
import ioniclogo from "../Assets/Ionic.svg";
import javascriptlogo from "../Assets/javascript.svg";
import javalogo from "../Assets/java.svg";
import jquerylogo from "../Assets/jquery.svg";
import keraslogo from "../Assets/Keras.svg";
import kotlinlogo from "../Assets/kotlin.svg";
import laravellogo from "../Assets/laravel.svg";
import materialuilogo from "../Assets/material-ui.svg";
import magentologo from "../Assets/magento.svg";
import mongodblogon from "../Assets/mongo.svg";
import mysqllogo from "../Assets/mysql.svg";
import nodelogo from "../Assets/node-js.svg";
import opencvlogo from "../Assets/opencv.svg";
import phplogo from "../Assets/php.svg";
import pytorchlogo from "../Assets/pytorch.svg";
import pythonlogo from "../Assets/python.svg";
import reduxlogo from "../Assets/redux.svg";
import salesforcelogo from "../Assets/salesforce.svg";
import scikitlearnlogo from "../Assets/scikit-learn.svg";
import shopifylogo from "../Assets/shopify.svg";
import sparklogo from "../Assets/spark.svg";
import stormlogo from "../Assets/storm.svg";
import tenserflowlogo from "../Assets/tenserflow.svg";
import typescriptlogo from "../Assets/typescript.svg";
import vuejslogo from "../Assets/vue-js.svg";
import woocommercelogo from "../Assets/woocommerce.svg";
import wordpresslogo from "../Assets/wordpress.svg";
import xcodelogo from "../Assets/xcode.svg";

const Tabs = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState(0);

  // Array of tab labels and content for simplicity
  const tabs = [
    { label: "Mobility", content: "" },
    { label: "Frontend", content: "" },
    { label: "Backend", content: "" },
    { label: "Machine Learning", content: "" },
    { label: "Artificial Intelligence", content: "" },
    { label: "Data Analytics", content: "" },
    { label: "CMS & E-Commerce", content: "" },
  ];

  return (
    <div className="bg-[#1c1c1e] text-white lg:px-[5.5rem] px-[1rem] lg:h-[80vh]">
      {/* Tabs */}
      <div className="flex lg:overflow-x-auto overflow-x-scroll  scroll-smooth list-none cursor-pointer justify-between text-white text-[1rem] font-semibold">
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => setActiveTab(index)}
            className={`p-2 px-5 ${
              activeTab === index ? "border-b-2 border-gray-500" : ""
            }`}
          >
            {tab.label}
          </li>
        ))}
      </div>

      {/* Content */}
      <div className=" justify-between lg:pb-0 pb-10 ">
        {activeTab === 0 && (
          <div className="grid lg:grid-cols-6 grid-cols-4 lg:gap-4  ">
            <div className="lg:flex lg:gap-3 mt-[56px]">
              <img src={reactlogo} alt="React Native" />
              <h1 className="mt-3">{tabs[activeTab].content} React Native</h1>
            </div>

            <div className="lg:flex lg:gap-3 mt-[56px]">
              <img src={Xamarianlogo} alt="React Native" />
              <h1 className="mt-3">{tabs[activeTab].content} Xamarian </h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={ioniclogo} alt="React Native" />
              <h1 className="mt-3">{tabs[activeTab].content} Ionic</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={kotlinlogo} alt="React Native" />
              <h1 className="mt-3">{tabs[activeTab].content}Kotlin</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={flutterlogo} alt="React Native" />
              <h1 className="mt-3">{tabs[activeTab].content}Flutter</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={javalogo} alt="React Native" />
              <h1 className="mt-3">{tabs[activeTab].content}Java</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={xcodelogo} alt="React Native" />
              <h1 className="mt-3">{tabs[activeTab].content}x Code</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={swiftlogo} alt="React Native" />
              <h1 className="mt-3">{tabs[activeTab].content}Swift</h1>
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className=" grid lg:grid-cols-6 grid-cols-4 lg:gap-4">
            <div className=" lg:flex gap-3 mt-[56px]">
              <img src={javascriptlogo} alt="React Native" width={50} />
              <h1 className="mt-3">{tabs[activeTab].content} JavaScript</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={typescriptlogo} alt="React Native" width={50} />
              <h1 className="mt-3">{tabs[activeTab].content} TypeScript </h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={reactlogo} alt="React Native" />
              <h1 className="mt-3">{tabs[activeTab].content} React.js</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={angularlogo} alt="React Native" />
              <h1 className="mt-3">{tabs[activeTab].content}Angular</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={vuejslogo} alt="React Native" />
              <h1 className="mt-3">{tabs[activeTab].content}Vue.js</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={bootstraplogo} alt="React Native" />
              <h1 className="mt-3">{tabs[activeTab].content}bootstrap</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={materialuilogo} alt="React Native" />
              <h1 className="mt-3">{tabs[activeTab].content}Material-ui</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={reduxlogo} alt="React Native" />
              <h1 className="mt-3">{tabs[activeTab].content}Redux</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={jquerylogo} alt="React Native" />
              <h1 className="mt-3">{tabs[activeTab].content}Jquery</h1>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className=" grid lg:grid-cols-6 lg:gap-4 grid-cols-4">
            <div className="lg:flex gap-3 mt-[56px]">
              <img src={javascriptlogo} alt="Backend" />
              <h1>{tabs[activeTab].content} JavaScript</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={typescriptlogo} alt="Backend" />
              <h1 className="mt-3">{tabs[activeTab].content}TypeScript</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={javalogo} alt="Backend" />
              <h1 className="mt-3">{tabs[activeTab].content}Java</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={pythonlogo} alt="Backend" />
              <h1 className="mt-3">{tabs[activeTab].content}Python</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={phplogo} alt="Backend" />
              <h1 className="mt-3">{tabs[activeTab].content}PHP</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={nodelogo} alt="Backend" />
              <h1 className="mt-3">{tabs[activeTab].content}Node.js</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={djangologo} alt="Backend" />
              <h1 className="mt-3">{tabs[activeTab].content}Django</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={laravellogo} alt="Backend" />
              <h1 className="mt-3">{tabs[activeTab].content}Laravel</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={mysqllogo} alt="Backend" />
              <h1 className="mt-3">{tabs[activeTab].content}MySQL</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={mongodblogon} alt="Backend" />
              <h1 className="mt-3">{tabs[activeTab].content}MongoDB</h1>
            </div>
          </div>
        )}
        {activeTab === 3 && (
          <div className="grid lg:grid-cols-6 grid-cols-4 lg:gap-5">
            <div className="lg:flex gap-3 mt-[56px]">
              <img src={tenserflowlogo} alt="Machine Learning" />
              <h1 className="mt-3">{tabs[activeTab].content}Tenser Flow</h1>
            </div>
            <div className="lg:flex gap-3 mt-[56px]">
              <img src={pytorchlogo} alt="Machine Learning" />
              <h1 className="mt-3">{tabs[activeTab].content}PyTorch</h1>
            </div>
            <div className="lg:flex gap-3 mt-[56px]">
              <img src={scikitlearnlogo} alt="Machine Learning" />
              <h1 className="mt-3">{tabs[activeTab].content}SciKit-Learn</h1>
            </div>
            <div className="lg:flex gap-3 mt-[56px]">
              <img src={keraslogo} alt="Machine Learning" />
              <h1 className="mt-3">{tabs[activeTab].content} Keras </h1>
            </div>
          </div>
        )}
        {activeTab === 4 && (
          <div className="grid lg:grid-cols-6 grid-cols-4 lg:gap-5">
            <div className="lg:flex gap-3 mt-[56px]">
              <img src={tenserflowlogo} alt="Machine Learning" />
              <h1 className="mt-3">{tabs[activeTab].content}Tenser Flow</h1>
            </div>
            <div className="lg:flex gap-3 mt-[56px]">
              <img src={pytorchlogo} alt="Machine Learning" />
              <h1 className="mt-3">{tabs[activeTab].content}PyTorch</h1>
            </div>
            <div className="lg:flex gap-3 mt-[56px]">
              <img src={opencvlogo} alt="Machine Learning" />
              <h1 className="mt-3">{tabs[activeTab].content}Open CV</h1>
            </div>
            <div className="lg:flex gap-3 mt-[56px]">
              <img src={keraslogo} alt="Machine Learning" />
              <h1 className="mt-3">{tabs[activeTab].content} Keras </h1>
            </div>
          </div>
        )}
        {activeTab === 5 && (
          <div className="grid lg:grid-cols-6 grid-cols-4 lg:gap-5 gap-2">
            <div className="lg:flex gap-3 mt-[56px]">
              <img src={sparklogo} alt="Machine Learning" />
              <h1 className="mt-3">{tabs[activeTab].content}Apache Spark</h1>
            </div>
            <div className="lg:flex gap-3 mt-[56px]">
              <img src={hadooplogo} alt="Machine Learning" />
              <h1 className="mt-3">{tabs[activeTab].content}Hadoop</h1>
            </div>
            <div className="lg:flex gap-3 mt-[56px]">
              <img src={flinklogo} alt="Machine Learning" />
              <h1 className="mt-3">{tabs[activeTab].content}Apache Flink</h1>
            </div>
            <div className="lg:flex gap-3 mt-[56px]">
              <img src={stormlogo} alt="Machine Learning" />
              <h1 className="mt-3">{tabs[activeTab].content}Apache Storm </h1>
            </div>
            <div className="lg:flex gap-3 mt-[56px]">
              <img src={kafkalogo} alt="Machine Learning" />
              <h1 className="mt-3">{tabs[activeTab].content} Apache Kafka </h1>
            </div>
          </div>
        )}
        {activeTab === 6 && (
          <div className=" grid lg:grid-cols-5 grid-cols-4 lg:gap-8">
            <div className="lg:flex gap-3 mt-[56px]">
              <img src={shopifylogo} alt="Backend" />
              <h1 className="mt-3">{tabs[activeTab].content} Shopify</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={magentologo} alt="Backend" />
              <h1 className="mt-3">{tabs[activeTab].content}Magento</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={wordpresslogo} alt="Backend" />
              <h1 className="mt-3">{tabs[activeTab].content}Wordpress</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={woocommercelogo} alt="Backend" />
              <h1 className="mt-3">{tabs[activeTab].content}WooCommerce</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={bigcommercelogo} alt="Backend" />
              <h1 className="mt-3">{tabs[activeTab].content}Big Commerce</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={prestashoplogo} alt="Backend" />
              <h1 className="mt-3">{tabs[activeTab].content}Presta Shop</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={openkartlogo} alt="Backend" />
              <h1 className="mt-3">{tabs[activeTab].content}Open Kart</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={salesforcelogo} alt="Backend" />
              <h1 className="mt-3">
                {tabs[activeTab].content}Salesforce Commerce Cloud
              </h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={reactlogo} alt="Backend" />
              <h1 className="mt-3">{tabs[activeTab].content}React Commerce</h1>
            </div>

            <div className="lg:flex gap-3 mt-[56px]">
              <img src={angularlogo} alt="Backend" />
              <h1 className="mt-3">
                {tabs[activeTab].content}Angular Commerce
              </h1>
            </div>
            <div className="lg:flex gap-3 mt-[56px]">
              <img src={vuestorefrontlogo} alt="Backend" />
              <h1 className="mt-3">{tabs[activeTab].content}Vue StoreFront</h1>
            </div>
            <div className="lg:flex gap-3 mt-[56px]">
              <img src={laravellogo} alt="Backend" />
              <h1 className="mt-3">{tabs[activeTab].content}Laravel</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
