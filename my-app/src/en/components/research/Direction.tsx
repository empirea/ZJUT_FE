import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { HREF } from "../../db";

function Direction() {
  const { id } = useParams<{ id: string }>();
  if (id && (Number(id) < 1 || Number(id) > 5)) {
    return <></>;
  }
  const activeItem = id ? Number(id) : 1;

  return (
    <React.Fragment>
      <div className="local fl">
        <h3>Research</h3>
        <div className="dqwz fr">
          Current Position:&nbsp;
          <Link to={HREF.INDEX}>Hemo</Link>&gt;
          <Link to={HREF.RESEARCH}>Research</Link>&gt;
          <Link to={HREF.RESEARCH_DIRECTION}>Research Direction</Link>&gt;
          {
            [
              <Link to={`${HREF.RESEARCH_DIRECTION_PART}/1`}>
                Urban Computing
              </Link>,
              <Link to={`${HREF.RESEARCH_DIRECTION_PART}/2`}>
                Intelligent Transportation System
              </Link>,
              <Link to={`${HREF.RESEARCH_DIRECTION_PART}/3`}>
                Social Computing
              </Link>,
              <Link to={`${HREF.RESEARCH_DIRECTION_PART}/4`}>
                Mobile Computing
            </Link>,
              <Link to={`${HREF.RESEARCH_DIRECTION_PART}/5`}>
                Natural Language Processing
            </Link>,
            ][activeItem - 1]
          }
        </div>
      </div>
      <div className="cy-title fl">
        <ul>
          <li>
            <Link to={HREF.RESEARCH_DIRECTION} className="ej-current">
              Research Direction
            </Link>
          </li>
          <li>
            <Link to={HREF.RESEARCH_PLATFORM}>Support Platform</Link>
          </li>
          <li>
            <Link to={HREF.RESEARCH_FOUNDATION}>Foundation</Link>
          </li>
        </ul>
      </div>
      <div className="content fl">
        <div className="Publications-title fl">
          <ul style={{ paddingLeft: "20px" }}>
            <li>
              <Link
                to={`${HREF.RESEARCH_DIRECTION_PART}/1`}
                title="Urban Computing"
                className={activeItem === 1 ? "Publications-current" : ""}
              >
                Urban Computing
              </Link>
            </li>
            <li>
              <Link
                to={`${HREF.RESEARCH_DIRECTION_PART}/2`}
                title="Intelligent Transportation System"
                className={activeItem === 2 ? "Publications-current" : ""}
              >
                Intelligent Transportation System
              </Link>
            </li>
            <li>
              <Link
                to={`${HREF.RESEARCH_DIRECTION_PART}/3`}
                title="Social Computing"
                className={activeItem === 3 ? "Publications-current" : ""}
              >
                Social Computing
              </Link>
            </li>
            {/*<li>*/}
            {/*  <Link*/}
            {/*    to={`${HREF.RESEARCH_DIRECTION_PART}/4`}*/}
            {/*    title="Social Computing"*/}
            {/*    className={activeItem === 4 ? "Publications-current" : ""}*/}
            {/*  >*/}
            {/*    Affective Computing*/}
            {/*  </Link>*/}
            {/*</li>*/}
            <li>
              <Link
                to={`${HREF.RESEARCH_DIRECTION_PART}/4`}
                title="Mobile Computing"
                className={activeItem === 4 ? "Publications-current" : ""}
              >
                Mobile Computing
              </Link>
            </li>
            <li>
              <Link
                to={`${HREF.RESEARCH_DIRECTION_PART}/5`}
                title="Natural Language Processing"
                className={activeItem === 5 ? "Publications-current" : ""}
              >
                Natural Language Processing
              </Link>
            </li>
          </ul>
        </div>
        {[<Part1 />, <Part2 />, <Part3 />,<Part4 />,<Part5 />][activeItem - 1]}
      </div>
    </React.Fragment>
  );
}

export { Direction };

function Part1() {
  return (
    <div className="content-con fl" id="vsb_content">
      <div className="WordSection1">
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          Since its establishment, this research group has undertaken a large
          number of scientific research tasks, accumulated more profound
          research work related to urban computing, computing social science,
          and intelligent transportation, and has rich project experience. Over
          the years, it has achieved a series of research results. A number of
          national-level projects, a series of academic papers and books have
          been published, and a number of patent authorizations and provincial
          and ministerial scientific research awards have been obtained, which
          has a certain influence at China and abroad.
        </p>
        <br />
        <h1 style={{ textAlign: "center" }}>
          <strong>Urban Computing</strong>
        </h1>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          <br />
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          The core problems of urban computing mainly include four aspects:
          urban perception, Management of massive heterogeneous data,
          Collaborative computing of heterogeneous data, A hybrid system
          combining virtual and real, data travels back and forth in the
          physical and virtual world.
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          This research group has achieved outstanding results in the following
          aspects:
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          1) This research group focuses on urban spatiotemporal data mining and processing technology, innovatively proposes the SHTL framework, cleverly integrates link prediction and urban flow prediction tasks, and uses spatial homogeneity as a bridge to provide a new perspective and solution for the reasonable transfer of source knowledge in urban flow prediction, effectively alleviating the problem of data scarcity, improving prediction accuracy, and promoting the development of urban computing field (Knowledge and Information Systems 2025)；
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          2) This research group focuses on the research of spatiotemporal trajectory data mining and anomaly detection technology, and proposes an unsupervised trajectory anomaly detection method based on dynamic network representation learning. By cleverly combining the characteristics of vehicle social networks with dynamic network embedding technology, it effectively solves the problem of imbalance in traditional methods when processing spatiotemporal data (IEEE Transactions on Vehicular Technology 2025)；
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          3) This research group proposes an unbiased anomaly trajectory detection method based on hierarchical sequence modeling (HS-UATD), which effectively captures rich spatiotemporal patterns and their spatial density distributions in trajectory data by combining quadtree hierarchical structure, graph transformer encoding, and Gaussian distribution modeling. Our research group focuses on addressing the limitations of existing trajectory detection methods in terms of information learning and data bias. Starting from the spatial hierarchy information and sequence dependencies of trajectories, we systematically constructed trajectory graphs and introduced unsupervised learning frameworks, significantly improving detection accuracy (IEEE Transactions on Consumer Electronics 2024)；
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          4) This research group focuses on spatiotemporal trajectory data mining technology and innovatively proposes the DCLS dual contrastive learning framework to address the key issue of the dual impact of users' long and short-term preferences on POI recommendation. By constructing a comparison perspective of users' own long and short-term trajectories and a comparison perspective of different users' short-term trajectories, we can deeply explore the dependency relationships between trajectories. At the same time, the introduction of a multi category attention fusion module adaptively integrates long short-term preferences and spatiotemporal dependencies, significantly improving the recommendation performance of the model on three real-world datasets and effectively promoting the development of spatiotemporal trajectory recommendation technology (CogSCI 2024)；
        </p>
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  3) This research group proposes to systematically summarize the*/}
        {/*  application of mobile crowdsourcing technology in smart cities based*/}
        {/*  on the research on human behavior and spatiotemporal trajectory data*/}
        {/*  mining and processing technology, and summarizes the MCS in smart*/}
        {/*  cities from a new perspective Extensive and diversified applications,*/}
        {/*  such as smart navigation, smart life, public services, and smart*/}
        {/*  transportation (IEEE Internet of Things Journal 2019)；*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  4) This research group proposes to construct a traffic simulation*/}
        {/*  scene of social vehicle travel based on floating car data and the*/}
        {/*  division of urban functional areas. The effectiveness of this method*/}
        {/*  is verified by realizing the scene of social vehicle travel in*/}
        {/*  Beijing. This method has a strong Versatility, applicable to major*/}
        {/*  cities in the world (IEEE Transactions on Vehicular Technology 2018)；*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  5) This research group proposes to analyze the floating car data to*/}
        {/*  obtain the trajectory information of the taxi passengers, mine the*/}
        {/*  different functional areas of the city spanned by these trajectories,*/}
        {/*  and recommend the activity area and trajectory for the taxi driver,*/}
        {/*  thereby reducing the flight rate and increasing the income (IEEE*/}
        {/*  Transactions on Industrial Informatics 2017).*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  6) This research group proposes an unsupervised business district discovery framework by clustering on the embedding space of graph convolutional networks to solve the problem of business district discovery.*/}
        {/*  First, the proposed framework aggregates human movement features based on geographic similarity through graph convolutional networks.*/}
        {/*  Secondly, based on the embedding space of the graph convolutional network, hierarchical clustering is applied to mine the potential functional areas hidden in different human models.*/}
        {/*  Finally, through kernel density estimation, the semantic tags of the clustering results are obtained to discover potential business districts.*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  7) This research group proposes a taxi driving fraud detection framework based on a combination of time and space costs.*/}
        {/*  First, identify other vehicles and points of interest (POI) that are implicitly interacting and cooperating between the vehicle and the collaborative Internet of Vehicles (C-IoV),*/}
        {/*  and build a baseline trajectory model to determine the typical trajectory distribution. Second, use statistical models to calculate travel distribution, travel time, and travel cost to detect abnormal trajectories.*/}
        {/*  Finally, we can combine the perception of abnormal road environment to discover the root cause of abnormal trajectory.*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "center" }}>*/}
        {/*  <img src="/images/research/p5.png" />*/}
        {/*</p>*/}
      </div>
    </div>
  );
}

function Part2() {
  return (
    <div className="content-con fl" id="vsb_content">
      <div className="WordSection1">
        <br />
        <h1 style={{ textAlign: "center" }}>
          <strong>Intelligent Transportation System</strong>
        </h1>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          <br />
        </p>
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  <strong> 1) Intelligent traffic light control:</strong>*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  According to the current situation and development trend of the*/}
        {/*  traffic situation, the research group proposed a dynamic division*/}
        {/*  method for traffic control sub-zones and an automatic identification*/}
        {/*  algorithm for coordinated paths of sub-zones for congested areas and*/}
        {/*  non-congested areas. A sub-zone signal control scheme generator for*/}
        {/*  complex scenes is constructed, which realizes scheme generation based*/}
        {/*  on multi-objective optimization and scheme generation based on expert*/}
        {/*  experience. On this basis, an AI control method based on the training*/}
        {/*  iteration of the program knowledge base is proposed, which realizes*/}
        {/*  the automatic optimization and matching of signal control programs in*/}
        {/*  various specific complex scenarios.*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  <strong>*/}
        {/*    2) Collaborative management of intelligent transportation:*/}
        {/*  </strong>*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  This research group uses the various traffic characteristic parameters*/}
        {/*  after fusion processing to establish a multi-source urban traffic*/}
        {/*  incident-driven traffic command and dispatch and signal coordination*/}
        {/*  control model. In the framework of the command and dispatch model, AI*/}
        {/*  video global perception and recognition technology, event prediction*/}
        {/*  analysis technology, and real-time scheduling optimization technology*/}
        {/*  are used for comprehensive command and coordinated management of urban*/}
        {/*  events. In view of the urban special mission needs of special*/}
        {/*  vehicles, research path planning guidance technology, trajectory*/}
        {/*  tracking prediction technology, signal coordination optimization*/}
        {/*  technology and global planning and dispatching technology to ensure*/}
        {/*  the fast and smooth passage of emergency vehicles.*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "center" }}>*/}
        {/*  <img src="/images/research/2020Emergency.png" />*/}
        {/*</p>*/}
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          <strong>
            1) Intelligent transportation anomaly event recognition:
          </strong>
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          Mengmeng Wang, Zeyi Huang, Xiangjie Kong, Guojiang Shen, Guang Dai, Jingdong Wang, and Yong Liu. Action Detail Matters: Refining Video Recognition with Local Action Queries. Computer Vision and Pattern Recognition (CVPR). 2025.
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          This research group uses video-based vehicle target motion state estimation technology, integrates global spatiotemporal features and local motion details, and introduces learnable motion state query vectors to build a multi-target vehicle trajectory association network. It leverages video models for long-sequence motion trajectory modeling, uses 3D spatiotemporal convolution adapters to capture speed-acceleration spatiotemporal correlation features of vehicle motion, thus achieving vehicle target motion state recognition. Moreover, a dual-stream feature interaction module is designed to adaptively focus on key visual features of vehicle turning, emergency braking, etc., realizing millisecond-level traffic abnormality recognition.
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          <strong>
            2) Intelligent transportation 3D single object tracking:
          </strong>
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          Mengmeng Wang, Haonan Wang, Yulong Li, Xiangjie Kong, Jiaxin Du, Feng Xia, and Guojiang Shen. TrackAny3D: Transferring Pretrained 3D Models for Category-unified 3D Point Cloud Tracking. International Conference on Computer Vision (ICCV). 2025.
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          This research group focuses on cutting-edge research in the field of intelligent perception and processing of 3D point clouds. We propose the TrackAny3D framework, which innovatively applies large-scale pre trained 3D models to cross category unified 3D point cloud single object tracking tasks. By introducing a hybrid architecture of parameter efficient adapters and geometric experts, we effectively solve the problem of cross category geometric differences, significantly improving the model's generalization ability and real-time performance. This provides a more efficient and universal 3D object tracking solution for fields such as autonomous driving and mobile robots.
        </p>
      </div>
    </div>
  );
}

function Part3() {
  return (
    <div className="content-con fl" id="vsb_content">
      <div className="WordSection1">
        <br />
        <h1 style={{ textAlign: "center" }}>
          <strong>Social Computing</strong>
        </h1>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          <br />
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          <strong>
            The transformation and quantification of social data, signals and
            intelligence into social intelligence is the core goal of social
            computing.
          </strong>
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          1) This research group proposes a plug and play subgraph learning (SGL) method, which uses the subgraph partitioning module (SGPM) to select groups of similar nodes using learnable memory vectors, and divides the graph into subgraphs to reduce memory overhead. The subgraph feature aggregation module (SGFAM) averages the features of different subgraph nodes to reduce feature redundancy. Experiments on four traffic network datasets show that SGL can significantly reduce memory overhead, with an average GPU memory reduction of 56.4%, and the prediction performance remains robust (International Joint Conference on Artificial Intelligence 2025)；
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          2) This research group proposes the Pattern Matching Dynamic Memory Network (PM DMNet), which extracts traffic patterns by comparing the storage matrix with the current state, reducing computational complexity to O (N). RMP and PMP prediction methods are also introduced. The transfer attention mechanism in PMP can align historical features with the target state, improving prediction accuracy. Experiments show that this model outperforms existing benchmarks (IEEE Transactions on Intelligent Transportation Systems 2025)；
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          3) This research group proposes the LLM-TPF framework, which utilizes the fusion of individuality and commonality to enhance time series prediction. Extract periodic features in the frequency domain and indicate temporal trends using text prototypes; In the time domain, design prompts guide the model to understand global information, and a universal fusion mechanism aggregates cross dimensional heterogeneous information. The three language models independently process different types of information. Numerous experiments have shown that LLM-TPF has excellent performance and remarkable generalization ability in zero sample scenarios, making it a powerful time series prediction tool
          (International Joint Conference on Artificial Intelligence 2025);
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          4) This research group introduces the Adaptive Neighborhood Enhancement Layer (ANEL) to address the issue of TKGC model performance being compromised by TKG sparsity. First, export the initial entity embeddings through the basic model, and then use the latent relationship module to reveal the hidden semantic relationships between entities to enrich explicit relationships. At the same time, ANEL dynamically calibrates the potential information impact based on the entity relationship structure, so that entities with fewer connections benefit more and entities with denser connections rely less on potential enhancement, improving the quality of sparse entity representation and ensuring accurate elasticity of representation
          (World Wide Web 2025);
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          5) This research group has innovatively developed TarU, a traffic risk prediction framework that integrates multi-source spatiotemporal data fusion, multi-view hypergraph contrastive learning, and uncertainty quantification. TarU models citywide semantic relationships via dynamic hypergraphs, uncovers potential features in sparse data through contrastive learning, and measures accident risk uncertainty using a zero-inflated negative binomial distribution, effectively tackling key challenges like data sparsity and imbalances in traffic accident data (Information Fusion 2025)；
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          6) This research group proposes a generalized information diffusion model (K-BID) based on graph neural networks and knowledge graphs to address the new characteristics of information diffusion in the new media era. This model systematically solves the challenges faced by traditional models in dealing with generalized information diffusion scenarios, such as data sparsity, weak temporal correlations, and fuzzy user preferences. This study also innovatively constructed a two-stage "matching and sorting" framework, which integrates semantic and social graph information through semantic cross units and graph attention networks, significantly improving the accuracy of information diffusion prediction (EXPERT SYSTEMS WITH APPLICATIONS 2025)；
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          7) This research group has been committed to the study of data completion and processing in intelligent transportation systems for a long time, and has deeply explored the methods and technical paths for filling missing values in transportation data. Based on the analysis of the characteristics and missing patterns of various traffic data, three types of filling methods, namely interpolation, statistical learning, and prediction, have been systematically summarized, providing comprehensive and in-depth theoretical support for the field of intelligent transportation. At the same time, our research group also conducted a detailed classification and organization of existing public datasets, and proposed future research directions aimed at promoting the further development and application of data processing technology in intelligent transportation systems (IEEE Transactions on Intelligent Transportation Systems 2024)；
        </p>
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  3) This research group proposes a sustainable collaborator*/}
        {/*  recommendation method based on meeting closures. Through the*/}
        {/*  probability of new collaborators recognized by scholars participating*/}
        {/*  in the meeting, this research group proposes a specific method to*/}
        {/*  quantify academic meeting-academic cooperation, and introduces meeting*/}
        {/*  closure relationships and cooperation Strength, build a weighted*/}
        {/*  academic cooperation network, use the restart random walk algorithm to*/}
        {/*  calculate the similarity between the target scholar and other*/}
        {/*  scholars, and then recommend the target scholars as collaborators*/}
        {/*  (IEEE Transactions on Computational Social Science 2019);*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  4) This research group proposes a paper recommendation method based on*/}
        {/*  network representation learning that combines text and structure:*/}
        {/*  firstly, the text information of the paper is represented by the text*/}
        {/*  vector to generate the paper text vector to find papers with similar*/}
        {/*  research content, and then the citation network is hidden Convert the*/}
        {/*  structural features of the paper into vectors and find papers with*/}
        {/*  similar network topologies, connect the text-similar papers and*/}
        {/*  structurally similar papers with the target paper to reconstruct the*/}
        {/*  citation network, and then learn the vector representation of the*/}
        {/*  paper through network representation learning, and finally according*/}
        {/*  to the paper vector Generate recommendation list based on similarity*/}
        {/*  (IEEE Transactions on Emerging Topics in Computing 2018);*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  5) This research group proposes a dynamic evolution analysis method of*/}
        {/*  academic cooperation based on academic age, which can more*/}
        {/*  comprehensively reveal the academic cooperation mechanism and help*/}
        {/*  policy makers formulate new policies to promote cooperation between*/}
        {/*  scholars of different academic ages, especially It is to help young*/}
        {/*  scholars integrate into the academic society faster (Scientometrics*/}
        {/*  2017).*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  6) The research group proposed a novel University Analysis Framework (UPF), which contains a novel recurrent deep clustering model (Recurrent-DC) for learning deep representation and clustering; in this framework,*/}
        {/*  the clustering algorithm The continuous operation of is represented as steps in the loop process, stacked on top of the representation output by the stacked autoencoder (SAE).*/}
        {/*  This framework can be used to analyze university disciplines well. (Future Generation Computer Systems)*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  7) This research group proposes a mask recognition framework (ECMask) based on edge computing.*/}
        {/*  The framework consists of three main stages: video recovery, face detection, and mask recognition.*/}
        {/*  The framework can detect whether pedestrians are wearing masks.*/}
        {/*  Good help to prevent public epidemics, such as COVID-19. (IEEE Internet of Things Journal)*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  8) This research group proposes a public transportation analysis program based on heterogeneous mobile crowdsourcing.*/}
        {/*  The program designs a MCS-based public transportation data generation and collection method to overcome the problem of data scarcity.*/}
        {/*  At the same time, we propose a multi-constrained evolutionary algorithm to optimize users Travel itinerary.*/}
        {/*  This solution can well meet the travel needs of passengers (IEEE Transactions on Industrial Informatics)*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  9) The research group proposed a license plate recognition framework based on federated learning (FedLPR).*/}
        {/*  In addition, the research group also proposed a tilted license plate correction algorithm to improve the accuracy of license plate character recognition.*/}
        {/*  This framework can protect user privacy while protecting user privacy.*/}
        {/*  It has a high accuracy rate of license plate recognition, and its communication cost is acceptable. (IEEE Transactions on Industrial Informatics)*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  10) This research group proposes a vehicle co-location (CP) system based on federated learning (FedVCP),*/}
        {/*  which uses transfer learning to eliminate individual differences in vehicle positioning, and uses federated learning to solve the CP privacy problem.*/}
        {/*  The system can make full use of the potential of Social Internet of Things (IoT) and Collaborative Edge Computing (CEC)*/}
        {/*  to provide high-precision positioning correction while ensuring user privacy. (IEEE Transactions on Computational Social Systems)*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "center" }}>*/}
        {/*  <img src="/images/research/p17.png" />*/}
        {/*</p>*/}
      </div>
    </div>
  );
}

// function Part4() {
//   return (
//     <div className="content-con fl" id="vsb_content">
//       <div className="WordSection1">
//         <h1 style={{ textAlign: "center" }}>
//           <strong>Affective computing</strong>
//         </h1>
//         <p style={{ textAlign: "justify", textIndent: "2em" }}>
//           <br />
//         </p>
//         <p style={{ textAlign: "justify", textIndent: "2em" }}>
//           <strong>
//           Emotional computing aims to make computers more intelligent by giving them the ability to recognize, understand and express human emotions.
//           </strong>
//         </p>
//         <p style={{ textAlign: "justify", textIndent: "2em" }}>
//         1) Fine-grained text sentiment analysis: This research group proposes a multi-scale fusion of text span characteristics of evaluation triples extraction method.
//          Convolutional neural networks with different convolution kernel sizes are used to extract local features in different spans.
//          And designed a simple span perception representation selection mechanism to better obtain span representation,
//          so as to better extract the evaluation triples (evaluation object, evaluation word, emotional polarity) in the review.
//         </p>
//         <p style={{ textAlign: "center" }}>
//           <img src="/images/research/p18.png" />
//         </p>
//         <p style={{ textAlign: "justify", textIndent: "2em" }}>
//         2) User portraits in the real estate field: In response to the problem of large investment but not obvious effects in the traditional propaganda methods of real estate companies,
//          This research group proposes a real estate buyer profile modeling method based on information extraction and multi-attribute decision support.
//          By extracting key phrases from unstructured text and matching artificially constructed templates,
//          Realize the transformation from unstructured data to structured data in real scenarios.
//          Using expert knowledge and an entropy-based weight distribution algorithm to calculate the relative importance of different attributes to different features,
//          Construct characteristic representations of specific real estate buyers, so as to fully explore the implicit heterogeneous relationship between real estate buyers,
//          Finally, the modeling of real estate buyer's portrait is realized, which can effectively help real estate companies to carry out precision marketing.
//         </p>
//         <p style={{ textAlign: "center" }}>
//           <img src="/images/research/p19.png" />
//         </p>
//         <p style={{ textAlign: "justify", textIndent: "2em" }}>
//         3) Text generation: Due to the scarcity of the corpus and the difficulty of manual labeling, text generation can solve this problem well.
//         </p>
//       </div>
//     </div>
//   );
// }

function Part4() {
  return (
    <div className="content-con fl" id="vsb_content">
      <div className="WordSection1">
        <h1 style={{ textAlign: "center" }}>
          <strong>Mobile computing</strong>
        </h1>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          <br />
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          1) This research group has innovatively proposed the SEFGL framework based on structural entropy and prototype clustering to address the problem of data and model heterogeneity in federated graph learning. By optimizing the graph structure through structural entropy and introducing virtual nodes to enhance the representation of minority class nodes, personalized prototypes are generated by aggregating client data based on structural entropy similarity on the server side, significantly improving the adaptability of the model to data and model heterogeneity (Information Sciences 2025)；
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          2) This research group proposes the Federal Adaptive Pseudo Label Selection (FedAPS) framework to address the challenges of label scarcity and privacy protection in aerial writing recognition systems. This framework integrates historical local models, global models, and dynamic word score recommendations to achieve accurate pseudo label generation and effectively utilize unlabeled data (IEEE Transactions on Consumer Electronics 2024)；
        </p>
      </div>
    </div>
  );
}

function Part5() {
  return (
    <div className="content-con fl" id="vsb_content">
      <div className="WordSection1">
        <h1 style={{ textAlign: "center" }}>
          <strong>Natural language processing</strong>
        </h1>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          <br />
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          1) This research group is dedicated to the field of natural language processing and has made significant progress in the Aspect Sentiment Triplet Extraction (ASTE) task. By innovatively proposing the DiffuSyn framework and integrating diffusion models with syntactic dependency analysis techniques, the problems of inaccurate boundaries and difficulty in extracting multi word phrases faced by traditional methods in handling complex sentiment analysis tasks have been solved. This framework not only significantly improves the accuracy of sentiment analysis, but also optimizes decoding efficiency, providing new research ideas and solutions for the field of fine-grained sentiment analysis (IEEE Transactions on Audio Speech and Language Processing 2025)；
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          2) This research group focuses on the field of multimodal sentiment analysis, and innovatively proposes a multimodal sentiment analysis method based on unimodal label generation and modal decomposition (ULMD) to address the challenges of information redundancy and modal heterogeneity faced by existing fusion methods. Our research group has successfully constructed a multi task learning framework, introducing a modal representation separator to accurately decompose each modal feature into common and unique parts, which are respectively applied to multi-modal and single-mode subtasks. At the same time, our research group cleverly designed a multimodal task with text modality as the core, using multi-layer perceptrons to explore the interaction between modalities in depth, and autonomously generating single modal sentiment labels to compensate for the lack of annotation in the dataset, significantly improving the overall efficiency of sentiment analysis tasks (Information Fusion 2025)；
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          3) This research group, grounded in deep studies of generative models for fine - grained sentiment analysis, innovatively proposes the Grid Noise Diffusion Pinpoint Network (GDP) model. By organically integrating diffusion model concepts with the T5 architecture and constructing innovative modules like Diffusion Vague Learning (DVL), Consistency Likelihood Learning (CLL), and GDP-FOR, it effectively overcomes traditional challenges in handling implicit sentiment elements and generation stability. This work paves the way for enhancing the accuracy and robustness of aspect-based sentiment analysis (ACL-findings 2024)；
        </p>
      </div>
    </div>
  );
}
