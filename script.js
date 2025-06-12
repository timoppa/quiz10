const questions = [
  {
    "question": "For this question, refer to the TerramEarth case study. TerramEarth's CTO wants to use the raw data from connected vehicles to help identify approximately when a vehicle in the field will have a catastrophic failure.\nYou want to allow analysts to centrally query the vehicle data.\nWhich architecture should you recommend?",
    "options": [
      "https://www.examtopics.com/assets/media/exam-media/04339/0002600001.png",
      "https://www.examtopics.com/assets/media/exam-media/04339/0002700001.png",
      "https://www.examtopics.com/assets/media/exam-media/04339/0002800001.png",
      "https://www.examtopics.com/assets/media/exam-media/04339/0002900001.png"
    ],
    "answer": [
      "https://www.examtopics.com/assets/media/exam-media/04339/0002600001.png"
    ],
    "multiple": false,
    "explanation": "Load balancer -> GCE -> Pub/Sub -> Dataflow -> BigQuery -> Analysts. This represents a scalable data pipeline where raw data is streamed to BigQuery for centralized querying. This fits the use case of enabling predictive analysis on a global scale."
  },
    {
    "question": "For this question, refer to the TerramEarth case study. The TerramEarth development team wants to create an API to meet the company's business requirements. You want the development team to focus their development effort on business value versus creating a custom framework.\nWhich method should they use?",
    "options": [
      "Use Google App Engine with Google Cloud Endpoints. Focus on an API for dealers and partners",
      "Use Google App Engine with a JAX-RS Jersey Java-based framework. Focus on an API for the public",
      "Use Google App Engine with the Swagger (Open API Specification) framework. Focus on an API for the public",
      "Use Google Container Engine with a Django Python container. Focus on an API for the public",
      "Use Google Container Engine with a Tomcat container with the Swagger (Open API Specification) framework. Focus on an API for dealers and partners"
    ],
    "answer": [
      "Use Google App Engine with Google Cloud Endpoints. Focus on an API for dealers and partners"
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the TerramEarth case study. Your development team has created a structured API to retrieve vehicle data. They want to allow third parties to develop tools for dealerships that use this vehicle event data. You want to support delegated authorization against this data.\nWhat should you do?",
    "options": [
      "Build or leverage an OAuth-compatible access control system",
      "Build SAML 2.0 SSO compatibility into your authentication system",
      "Restrict data access based on the source IP address of the partner systems",
      "Create secondary credentials for each dealer that can be given to the trusted third party"
    ],
    "answer": [
      "Build or leverage an OAuth-compatible access control system"
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the TerramEarth case study. TerramEarth plans to connect all 20 million vehicles in the field to the cloud. This increases the volume to 20 million 600 byte records a second for 40 TB an hour.\nHow should you design the data ingestion?",
    "options": [
      "Vehicles write data directly to GCS",
      "Vehicles write data directly to Google Cloud Pub/Sub",
      "Vehicles stream data directly to Google BigQuery",
      "Vehicles continue to write data using the existing system (FTP)"
    ],
    "answer": [
      "Vehicles write data directly to Google Cloud Pub/Sub"
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the TerramEarth case study. You analyzed TerramEarth's business requirement to reduce downtime, and found that they can achieve a majority of time saving by reducing customer's wait time for parts. You decided to focus on reduction of the 3 weeks aggregate reporting time.\nWhich modifications to the company's processes should you recommend?",
    "options": [
      "Migrate from CSV to binary format, migrate from FTP to SFTP transport, and develop machine learning analysis of metrics",
      "Migrate from FTP to streaming transport, migrate from CSV to binary format, and develop machine learning analysis of metrics",
      "Increase fleet cellular connectivity to 80%, migrate from FTP to streaming transport, and develop machine learning analysis of metrics",
      "Migrate from FTP to SFTP transport, develop machine learning analysis of metrics, and increase dealer local inventory by a fixed factor"
    ],
    "answer": [
      "Increase fleet cellular connectivity to 80%, migrate from FTP to streaming transport, and develop machine learning analysis of metrics"
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the TerramEarth case study. Which of TerramEarth's legacy enterprise processes will experience significant change as a result of increased Google Cloud Platform adoption?",
    "options": [
      "Opex/capex allocation, LAN changes, capacity planning",
      "Capacity planning, TCO calculations, opex/capex allocation",
      "Capacity planning, utilization measurement, data center expansion",
      "Data Center expansion, TCO calculations, utilization measurement"
    ],
    "answer": [
      "Capacity planning, TCO calculations, opex/capex allocation"
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the TerramEarth case study. To speed up data retrieval, more vehicles will be upgraded to cellular connections and be able to transmit data to the ETL process. The current FTP process is error-prone and restarts the data transfer from the start of the file when connections fail, which happens often. You want to improve the reliability of the solution and minimize data transfer time on the cellular connections.\nWhat should you do?",
    "options": [
      "Use one Google Container Engine cluster of FTP servers. Save the data to a Multi-Regional bucket. Run the ETL process using data in the bucket",
      "Use multiple Google Container Engine clusters running FTP servers located in different regions. Save the data to Multi-Regional buckets in US, EU, and Asia. Run the ETL process using the data in the bucket",
      "Directly transfer the files to different Google Cloud Multi-Regional Storage bucket locations in US, EU, and Asia using Google APIs over HTTP(S). Run the ETL process using the data in the bucket",
      "Directly transfer the files to a different Google Cloud Regional Storage bucket location in US, EU, and Asia using Google APIs over HTTP(S). Run the ETL process to retrieve the data from each Regional bucket"
    ],
    "answer": [
      "Directly transfer the files to a different Google Cloud Regional Storage bucket location in US, EU, and Asia using Google APIs over HTTP(S). Run the ETL process to retrieve the data from each Regional bucket"
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the TerramEarth case study. TerramEarth's 20 million vehicles are scattered around the world. Based on the vehicle's location, its telemetry data is stored in a Google Cloud Storage (GCS) regional bucket (US, Europe, or Asia). The CTO has asked you to run a report on the raw telemetry data to determine why vehicles are breaking down after 100 K miles. You want to run this job on all the data.\nWhat is the most cost-effective way to run this job?",
    "options": [
      "Move all the data into 1 zone, then launch a Cloud Dataproc cluster to run the job",
      "Move all the data into 1 region, then launch a Google Cloud Dataproc cluster to run the job",
      "Launch a cluster in each region to preprocess and compress the raw data, then move the data into a multi-region bucket and use a Dataproc cluster to finish the job",
      "Launch a cluster in each region to preprocess and compress the raw data, then move the data into a region bucket and use a Cloud Dataproc cluster to finish the job"
    ],
    "answer": [
      "Launch a cluster in each region to preprocess and compress the raw data, then move the data into a region bucket and use a Cloud Dataproc cluster to finish the job"
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the TerramEarth case study. TerramEarth has equipped all connected trucks with servers and sensors to collect telemetry data. Next year they want to use the data to train machine learning models. They want to store this data in the cloud while reducing costs.\nWhat should they do?",
    "options": [
      "Have the vehicle's computer compress the data in hourly snapshots, and store it in a Google Cloud Storage (GCS) Nearline bucket",
      "Push the telemetry data in real-time to a streaming dataflow job that compresses the data, and store it in Google BigQuery",
      "Push the telemetry data in real-time to a streaming dataflow job that compresses the data, and store it in Cloud Bigtable",
      "Have the vehicle's computer compress the data in hourly snapshots, and store it in a GCS Coldline bucket"
    ],
    "answer": [
      "Have the vehicle's computer compress the data in hourly snapshots, and store it in a GCS Coldline bucket"
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the TerramEarth case study. Your agricultural division is experimenting with fully autonomous vehicles. You want your architecture to promote strong security during vehicle operation.\nWhich two architectures should you consider? (Choose two.)",
    "options": [
      "Treat every micro service call between modules on the vehicle as untrusted.",
      "Require IPv6 for connectivity to ensure a secure address space.",
      "Use a trusted platform module (TPM) and verify firmware and binaries on boot.",
      "Use a functional programming language to isolate code execution cycles.",
      "Use multiple connectivity subsystems for redundancy.",
      "Enclose the vehicle's drive electronics in a Faraday cage to isolate chips."
    ],
    "answer": [
      "Treat every micro service call between modules on the vehicle as untrusted.",
      "Use a trusted platform module (TPM) and verify firmware and binaries on boot."
    ],
    "multiple": true
  },
  {
    "question": "For this question, refer to the TerramEarth case study. Operational parameters such as oil pressure are adjustable on each of TerramEarth's vehicles to increase their efficiency, depending on their environmental conditions. Your primary goal is to increase the operating efficiency of all 20 million cellular and unconnected vehicles in the field.\nHow can you accomplish this goal?",
    "options": [
      "Have you engineers inspect the data for patterns, and then create an algorithm with rules that make operational adjustments automatically",
      "Capture all operating data, train machine learning models that identify ideal operations, and run locally to make operational adjustments automatically",
      "Implement a Google Cloud Dataflow streaming job with a sliding window, and use Google Cloud Messaging (GCM) to make operational adjustments automatically",
      "Capture all operating data, train machine learning models that identify ideal operations, and host in Google Cloud Machine Learning (ML) Platform to make operational adjustments automatically"
    ],
    "answer": [
      "Capture all operating data, train machine learning models that identify ideal operations, and run locally to make operational adjustments automatically"
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the TerramEarth case study. To be compliant with European GDPR regulation, TerramEarth is required to delete data generated from its European customers after a period of 36 months when it contains personal data. In the new architecture, this data will be stored in both Cloud Storage and BigQuery. What should you do?",
    "options": [
      "Create a BigQuery table for the European data, and set the table retention period to 36 months. For Cloud Storage, use gsutil to enable lifecycle management using a DELETE action with an Age condition of 36 months.",
      "Create a BigQuery table for the European data, and set the table retention period to 36 months. For Cloud Storage, use gsutil to create a SetStorageClass to NONE action when with an Age condition of 36 months.",
      "Create a BigQuery time-partitioned table for the European data, and set the partition expiration period to 36 months. For Cloud Storage, use gsutil to enable lifecycle management using a DELETE action with an Age condition of 36 months.",
      "Create a BigQuery time-partitioned table for the European data, and set the partition expiration period to 36 months. For Cloud Storage, use gsutil to create a SetStorageClass to NONE action with an Age condition of 36 months."
    ],
    "answer": [
      "Create a BigQuery time-partitioned table for the European data, and set the partition expiration period to 36 months. For Cloud Storage, use gsutil to enable lifecycle management using a DELETE action with an Age condition of 36 months."
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the TerramEarth case study. TerramEarth has decided to store data files in Cloud Storage. You need to configure Cloud Storage lifecycle rule to store 1 year of data and minimize file storage cost.\nWhich two actions should you take?",
    "options": [
      "Create a Cloud Storage lifecycle rule with Age: \u05d2\u20ac30\u05d2\u20ac, Storage Class: \u05d2\u20acStandard\u05d2\u20ac, and Action: \u05d2\u20acSet to Coldline\u05d2\u20ac, and create a second GCS life-cycle rule with Age: \u05d2\u20ac365\u05d2\u20ac, Storage Class: \u05d2\u20acColdline\u05d2\u20ac, and Action: \u05d2\u20acDelete\u05d2\u20ac.",
      "Create a Cloud Storage lifecycle rule with Age: \u05d2\u20ac30\u05d2\u20ac, Storage Class: \u05d2\u20acColdline\u05d2\u20ac, and Action: \u05d2\u20acSet to Nearline\u05d2\u20ac, and create a second GCS life-cycle rule with Age: \u05d2\u20ac91\u05d2\u20ac, Storage Class: \u05d2\u20acColdline\u05d2\u20ac, and Action: \u05d2\u20acSet to Nearline\u05d2\u20ac.",
      "Create a Cloud Storage lifecycle rule with Age: \u05d2\u20ac90\u05d2\u20ac, Storage Class: \u05d2\u20acStandard\u05d2\u20ac, and Action: \u05d2\u20acSet to Nearline\u05d2\u20ac, and create a second GCS life-cycle rule with Age: \u05d2\u20ac91\u05d2\u20ac, Storage Class: \u05d2\u20acNearline\u05d2\u20ac, and Action: \u05d2\u20acSet to Coldline\u05d2\u20ac.",
      "Create a Cloud Storage lifecycle rule with Age: \u05d2\u20ac30\u05d2\u20ac, Storage Class: \u05d2\u20acStandard\u05d2\u20ac, and Action: \u05d2\u20acSet to Coldline\u05d2\u20ac, and create a second GCS life-cycle rule with Age: \u05d2\u20ac365\u05d2\u20ac, Storage Class: \u05d2\u20acNearline\u05d2\u20ac, and Action: \u05d2\u20acDelete\u05d2\u20ac."
    ],
    "answer": [
      "Create a Cloud Storage lifecycle rule with Age: \u05d2\u20ac30\u05d2\u20ac, Storage Class: \u05d2\u20acStandard\u05d2\u20ac, and Action: \u05d2\u20acSet to Coldline\u05d2\u20ac, and create a second GCS life-cycle rule with Age: \u05d2\u20ac365\u05d2\u20ac, Storage Class: \u05d2\u20acColdline\u05d2\u20ac, and Action: \u05d2\u20acDelete\u05d2\u20ac."
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the TerramEarth case study. You need to implement a reliable, scalable GCP solution for the data warehouse for your company, TerramEarth. Considering the TerramEarth business and technical requirements, what should you do?",
    "options": [
      "Replace the existing data warehouse with BigQuery. Use table partitioning.",
      "Replace the existing data warehouse with a Compute Engine instance with 96 CPUs.",
      "Replace the existing data warehouse with BigQuery. Use federated data sources.",
      "Replace the existing data warehouse with a Compute Engine instance with 96 CPUs. Add an additional Compute Engine preemptible instance with 32 CPUs."
    ],
    "answer": [
      "Replace the existing data warehouse with BigQuery. Use table partitioning."
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the TerramEarth case study. A new architecture that writes all incoming data to BigQuery has been introduced. You notice that the data is dirty, and want to ensure data quality on an automated daily basis while managing cost.\nWhat should you do?",
    "options": [
      "Set up a streaming Cloud Dataflow job, receiving data by the ingestion process. Clean the data in a Cloud Dataflow pipeline.",
      "Create a Cloud Function that reads data from BigQuery and cleans it. Trigger the Cloud Function from a Compute Engine instance.",
      "Create a SQL statement on the data in BigQuery, and save it as a view. Run the view daily, and save the result to a new table.",
      "Use Cloud Dataprep and configure the BigQuery tables as the source. Schedule a daily job to clean the data."
    ],
    "answer": [
      "Use Cloud Dataprep and configure the BigQuery tables as the source. Schedule a daily job to clean the data."
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the TerramEarth case study. Considering the technical requirements, how should you reduce the unplanned vehicle downtime in GCP?",
    "options": [
      "Use BigQuery as the data warehouse. Connect all vehicles to the network and stream data into BigQuery using Cloud Pub/Sub and Cloud Dataflow. Use Google Data Studio for analysis and reporting.",
      "Use BigQuery as the data warehouse. Connect all vehicles to the network and upload gzip files to a Multi-Regional Cloud Storage bucket using gcloud. Use Google Data Studio for analysis and reporting.",
      "Use Cloud Dataproc Hive as the data warehouse. Upload gzip files to a Multi-Regional Cloud Storage bucket. Upload this data into BigQuery using gcloud. Use Google Data Studio for analysis and reporting.",
      "Use Cloud Dataproc Hive as the data warehouse. Directly stream data into partitioned Hive tables. Use Pig scripts to analyze data."
    ],
    "answer": [
      "Use BigQuery as the data warehouse. Connect all vehicles to the network and stream data into BigQuery using Cloud Pub/Sub and Cloud Dataflow. Use Google Data Studio for analysis and reporting."
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the TerramEarth case study. You are asked to design a new architecture for the ingestion of the data of the 200,000 vehicles that are connected to a cellular network. You want to follow Google-recommended practices.\nConsidering the technical requirements, which components should you use for the ingestion of the data?",
    "options": [
      "Google Kubernetes Engine with an SSL Ingress",
      "Cloud IoT Core with public/private key pairs",
      "Compute Engine with project-wide SSH keys",
      "Compute Engine with specific SSH keys"
    ],
    "answer": [
      "Cloud IoT Core with public/private key pairs"
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the TerramEarth case study. You start to build a new application that uses a few Cloud Functions for the backend. One use case requires a Cloud Function func_display to invoke another Cloud Function func_query. You want func_query only to accept invocations from func_display. You also want to follow Google's recommended best practices. What should you do?",
    "options": [
      "Create a token and pass it in as an environment variable to func_display. When invoking func_query, include the token in the request. Pass the same token to func_query and reject the invocation if the tokens are different.",
      "Make func_query 'Require authentication.' Create a unique service account and associate it to func_display. Grant the service account invoker role for func_query. Create an id token in func_display and include the token to the request when invoking func_query.",
      "Make func_query 'Require authentication' and only accept internal traffic. Create those two functions in the same VPCreate an ingress firewall rule for func_query to only allow traffic from func_display.",
      "Create those two functions in the same project and VPC. Make func_query only accept internal traffic. Create an ingress firewall for func_query to only allow traffic from func_display. Also, make sure both functions use the same service account."
    ],
    "answer": [
      "Make func_query 'Require authentication.' Create a unique service account and associate it to func_display. Grant the service account invoker role for func_query. Create an id token in func_display and include the token to the request when invoking func_query."
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the TerramEarth case study. You have broken down a legacy monolithic application into a few containerized RESTful microservices.\nYou want to run those microservices on Cloud Run. You also want to make sure the services are highly available with low latency to your customers. What should you do?",
    "options": [
      "Deploy Cloud Run services to multiple availability zones. Create Cloud Endpoints that point to the services. Create a global HTTP(S) Load Balancing instance and attach the Cloud Endpoints to its backend.",
      "Deploy Cloud Run services to multiple regions. Create serverless network endpoint groups pointing to the services. Add the serverless NEGs to a backend service that is used by a global HTTP(S) Load Balancing instance.",
      "Deploy Cloud Run services to multiple regions. In Cloud DNS, create a latency-based DNS name that points to the services.",
      "Deploy Cloud Run services to multiple availability zones. Create a TCP/IP global load balancer. Add the Cloud Run Endpoints to its backend service."
    ],
    "answer": [
      "Deploy Cloud Run services to multiple regions. Create serverless network endpoint groups pointing to the services. Add the serverless NEGs to a backend service that is used by a global HTTP(S) Load Balancing instance."
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the TerramEarth case study. You are migrating a Linux-based application from your private data center to Google Cloud. The\nTerramEarth security team sent you several recent Linux vulnerabilities published by Common Vulnerabilities and Exposures (CVE). You need assistance in understanding how these vulnerabilities could impact your migration. What should you do? (Choose two.)",
    "options": [
      "Open a support case regarding the CVE and chat with the support engineer.",
      "Read the CVEs from the Google Cloud Status Dashboard to understand the impact.",
      "Read the CVEs from the Google Cloud Platform Security Bulletins to understand the impact.",
      "Post a question regarding the CVE in Stack Overflow to get an explanation.",
      "Post a question regarding the CVE in a Google Cloud discussion group to get an explanation."
    ],
    "answer": [
      "Open a support case regarding the CVE and chat with the support engineer.",
      "Read the CVEs from the Google Cloud Platform Security Bulletins to understand the impact."
    ],
    "multiple": true
  },
  {
    "question": "For this question, refer to the TerramEarth case study. TerramEarth has a legacy web application that you cannot migrate to cloud. However, you still want to build a cloud-native way to monitor the application. If the application goes down, you want the URL to point to a \"Site is unavailable\" page as soon as possible. You also want your Ops team to receive a notification for the issue. You need to build a reliable solution for minimum cost. What should you do?",
    "options": [
      "Create a scheduled job in Cloud Run to invoke a container every minute. The container will check the application URL. If the application is down, switch the URL to the \"Site is unavailable\" page, and notify the Ops team.",
      "Create a cron job on a Compute Engine VM that runs every minute. The cron job invokes a Python program to check the application URL. If the application is down, switch the URL to the \"Site is unavailable\" page, and notify the Ops team.",
      "Create a Cloud Monitoring uptime check to validate the application URL. If it fails, put a message in a Pub/Sub queue that triggers a Cloud Function to switch the URL to the \"Site is unavailable\" page, and notify the Ops team.",
      "Use Cloud Error Reporting to check the application URL. If the application is down, switch the URL to the \"Site is unavailable\" page, and notify the Ops team."
    ],
    "answer": [
      "Create a Cloud Monitoring uptime check to validate the application URL. If it fails, put a message in a Pub/Sub queue that triggers a Cloud Function to switch the URL to the \"Site is unavailable\" page, and notify the Ops team."
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the TerramEarth case study. You are building a microservice-based application for TerramEarth. The application is based on Docker containers. You want to follow Google-recommended practices to build the application continuously and store the build artifacts. What should you do?",
    "options": [
      "Configure a trigger in Cloud Build for new source changes. Invoke Cloud Build to build container images for each microservice, and tag them using the code commit hash. Push the images to the Container Registry.",
      "Configure a trigger in Cloud Build for new source changes. The trigger invokes build jobs and build container images for the microservices. Tag the images with a version number, and push them to Cloud Storage.",
      "Create a Scheduler job to check the repo every minute. For any new change, invoke Cloud Build to build container images for the microservices. Tag the images using the current timestamp, and push them to the Container Registry.",
      "Configure a trigger in Cloud Build for new source changes. Invoke Cloud Build to build one container image, and tag the image with the label 'latest.' Push the image to the Container Registry."
    ],
    "answer": [
      "Configure a trigger in Cloud Build for new source changes. Invoke Cloud Build to build container images for each microservice, and tag them using the code commit hash. Push the images to the Container Registry."
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the TerramEarth case study. TerramEarth has about 1 petabyte (PB) of vehicle testing data in a private data center. You want to move the data to Cloud Storage for your machine learning team. Currently, a 1-Gbps interconnect link is available for you. The machine learning team wants to start using the data in a month. What should you do?",
    "options": [
      "Request Transfer Appliances from Google Cloud, export the data to appliances, and return the appliances to Google Cloud.",
      "Configure the Storage Transfer service from Google Cloud to send the data from your data center to Cloud Storage.",
      "Make sure there are no other users consuming the 1Gbps link, and use multi-thread transfer to upload the data to Cloud Storage.",
      "Export files to an encrypted USB device, send the device to Google Cloud, and request an import of the data to Cloud Storage."
    ],
    "answer": [
      "Request Transfer Appliances from Google Cloud, export the data to appliances, and return the appliances to Google Cloud."
    ],
    "multiple": false
  }
];

questions.sort(() => Math.random() - 0.5);


let currentQuestion = 0;
let score = 0;
let showingFeedback = false;
let quizStartTime = new Date();

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const finishBtn = document.getElementById('finishTestBtn');



function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function updateProgress() {
  const progressPercent = ((currentQuestion) / questions.length) * 100;
  document.getElementById('progressBar').style.width = `${progressPercent}%`;
  document.getElementById('progressText').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
}

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  const shuffledOptions = shuffleArray([...q.options]);
  
  const inputType = q.multiple ? "checkbox" : "radio";

    shuffledOptions.forEach(option => {
      const li = document.createElement("li");
      const isImage = option.match(/\.(jpeg|jpg|gif|png|webp)$/i);
    
      li.innerHTML = `
        <label class="option">
          <input type="${inputType}" name="option" value="${option}">
          <span>${isImage ? `<img src="${option}" alt="Option image" style="max-width: 100%; height: auto;" />` : option}</span>
        </label>`;
      optionsEl.appendChild(li);
    });

  // ✅ Now add the `.selected` logic AFTER options are rendered
  optionsEl.querySelectorAll("input[type='radio']").forEach(input => {
    input.addEventListener('change', () => {
      document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
      input.parentElement.classList.add('selected');
    });
  });

  resultEl.innerHTML = "";
  nextBtn.textContent = "Submit";
  showingFeedback = false;
  updateProgress();

  if (currentQuestion === questions.length - 1) {
    finishBtn.style.display = "block";
  } else {
    finishBtn.style.display = "none";
  }

    if (currentQuestion >= 1) {
      finishBtn.style.display = "block";
    } else {
      finishBtn.style.display = "none";
    }
}


let totalTimeInSeconds = 90 * 60; // 1 hour 30 minutes = 5400 seconds
const timerEl = document.getElementById("timer");

function updateTimerDisplay() {
  const hours = Math.floor(totalTimeInSeconds / 3600);
  const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
  const seconds = totalTimeInSeconds % 60;

  let timeParts = [];

  if (hours > 0) timeParts.push(`${hours} hour${hours !== 1 ? 's' : ''}`);
  if (minutes > 0 || hours > 0) timeParts.push(`${minutes} min${minutes !== 1 ? 's' : ''}`);
  timeParts.push(`${seconds} second${seconds !== 1 ? 's' : ''}`);

  timerEl.textContent = `Time Remaining: ${timeParts.join(', ')}`;
}


function startTimer() {
  countdownInterval = setInterval(() => {
    totalTimeInSeconds--;
    updateTimerDisplay();

    if (totalTimeInSeconds <= 0) {
      clearInterval(countdownInterval);
      alert("Time's up! Submitting your quiz.");
      showResult();
    }
  }, 1000);
}



let countdownInterval = setInterval(() => {
  totalTimeInSeconds--;
  updateTimerDisplay();

  if (totalTimeInSeconds <= 0) {
    clearInterval(countdownInterval);
    alert("Time's up! Submitting your quiz.");
    showResult();
  }
}, 1000);

updateTimerDisplay(); // show initial value



nextBtn.addEventListener("click", () => {
  const currentQ = questions[currentQuestion];
  const selectedInputs = Array.from(document.querySelectorAll("input[name='option']:checked"));
  const correctAnswers = currentQ.answer;

  if (!showingFeedback) {
    if (selectedInputs.length === 0) return alert("Please select at least one option.");

    const selectedValues = selectedInputs.map(input => input.value);
    const isCorrect = correctAnswers.length === selectedValues.length &&
                      correctAnswers.every(ans => selectedValues.includes(ans));

    // Disable all inputs
    document.querySelectorAll("input[name='option']").forEach(input => input.disabled = true);

    // Highlight correct and incorrect
    document.querySelectorAll("input[name='option']").forEach(input => {
      const parentLabel = input.parentElement;
      if (correctAnswers.includes(input.value)) {
        parentLabel.classList.add("correct");
      }
      if (input.checked && !correctAnswers.includes(input.value)) {
        parentLabel.classList.add("incorrect");
      }
    });

    // Feedback
    if (isCorrect) {
      score++;
      resultEl.innerHTML = `<p style="color: green;">✅ Correct!</p>`;
    } else {
      resultEl.innerHTML = `<p style="color: red;">❌ Incorrect.</p>
                            <p>Correct Answer: <strong>${correctAnswers.join(", ")}</strong></p>`;
    }

    // ⬇️ Add this below the feedback
    if (currentQ.explanation) {
      resultEl.innerHTML += `<p class="explanation"><strong>Explanation:</strong> ${currentQ.explanation}</p>`;
    }

    nextBtn.textContent = currentQuestion < questions.length - 1 ? "Next Question" : "See Result";
    showingFeedback = true;

  } else {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
});

function formatDuration(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  const parts = [];
  if (h > 0) parts.push(`${h}h`);
  if (m > 0 || h > 0) parts.push(`${m}m`);
  parts.push(`${s}s`);

  return parts.join(' ');
}


// Save score to history in localStorage
function saveScoreToHistory(score, total) {
  const endTime = new Date();
  const durationInSeconds = Math.floor((endTime - quizStartTime) / 1000);
  const duration = formatDuration(durationInSeconds);

  const scoreRecord = {
    score,
    total,
    date: endTime.toLocaleString(),
    duration
  };

  let history = JSON.parse(localStorage.getItem('quizScoreHistory')) || [];
  history.push(scoreRecord);
  localStorage.setItem('quizScoreHistory', JSON.stringify(history));
}

// Show full history above quiz
function displayScoreHistory() {
  const container = document.querySelector(".container");
  let history = JSON.parse(localStorage.getItem('quizScoreHistory')) || [];

  // Remove existing history display if any
  const existingHistory = document.getElementById('scoreHistory');
  if (existingHistory) existingHistory.remove();

  if (history.length === 0) return;

  // Create history table
  const historyDiv = document.createElement('div');
  historyDiv.id = 'scoreHistory';
  historyDiv.innerHTML = `
    <h3>Score History</h3>
    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr>
          <th>#</th>
          <th>Score</th>
          <th>Time Taken</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        ${history.map((item, idx) => `
          <tr>
            <td>${idx + 1}</td>
            <td>${item.score} / ${item.total}</td>
            <td>${item.duration || '-'}</td>
            <td>${item.date}</td>
          </tr>`).join('')}
      </tbody>
    </table>
    <button id="clearHistoryBtn" style="margin-top: 10px;">Clear History</button>
    <hr>
  `;

  container.insertBefore(historyDiv, document.getElementById("quiz"));

  // Add clear history button event listener
  document.getElementById('clearHistoryBtn').addEventListener('click', () => {
    if (confirm("Are you sure you want to clear your score history?")) {
      localStorage.removeItem('quizScoreHistory');
      displayScoreHistory(); // Remove history display
    }
  });
}

// Updated showResult to save score and show history
function showResult() {
  saveScoreToHistory(score, questions.length);
  document.getElementById("quiz").style.display = "none";
  document.getElementById("finalResult").style.display = "block";
  document.getElementById("finalResult").innerHTML = `
      <h2>Your Score: ${score}/${questions.length}</h2>
      <button id="restartQuizBtn" style="margin-top: 16px;">Restart Quiz</button>
`;
  finishBtn.style.display = "none";

  displayScoreHistory();

  // ✅ Restart logic with timer reset
  document.getElementById("restartQuizBtn").addEventListener("click", () => {
    // Reset quiz state
    score = 0;
    currentQuestion = 0;
    showingFeedback = false;
    quizStartTime = new Date();

    // Reset timer
    clearInterval(countdownInterval);
    totalTimeInSeconds = 90 * 60; // 1 hour 30 minutes
    updateTimerDisplay();
    startTimer(); // start a new countdown

    // Re-shuffle and reload quiz
    questions.sort(() => Math.random() - 0.5);
    document.getElementById("quiz").style.display = "block";
    document.getElementById("finalResult").style.display = "none";
    loadQuestion();
  });
}

// Initial call to show history on page load
// displayScoreHistory(); 

finishBtn.style.display = "none"; // start hidden

startTimer();

// Initial call to load first question
loadQuestion();
