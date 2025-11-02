// constants.jsx
import stressImg from "../assets/images/stress.jpg";
import anxietyImg from "../assets/images/anxiety.jpg";
import migranesImg from "../assets/Images/migranes.jpeg";
import insomaniaImg from "../assets/Images/insomania.jpeg";
import chronicPainImg from "../assets/Images/chronicPain.jpeg";
import backPainImg from "../assets/Images/backPain.jpeg";
import digestiveIssueImg from "../assets/Images/digestiveIssue.jpeg";
import arthritiesImg from "../assets/Images/arthrities.jpeg";
import image1 from "../assets/Images/certificates/image-1.jpeg";
import image2 from "../assets/Images/certificates/image-2.jpeg";
import image3 from "../assets/Images/certificates/image-3.jpeg";
import image4 from "../assets/Images/certificates/image-4.jpeg";
import image5 from "../assets/Images/certificates/image-5.jpeg";
import image6 from "../assets/Images/certificates/image-6.jpeg";
import image7 from "../assets/Images/certificates/image-7.jpeg";
import image8 from "../assets/Images/certificates/image-8.jpeg";
import image9 from "../assets/Images/certificates/image-9.jpeg";
import image10 from "../assets/Images/certificates/image-10.jpeg";
import image11 from "../assets/Images/certificates/image-11.jpeg";
import video1 from "../assets/Images/testimonials/video-1.mp4"
import video2 from "../assets/Images/testimonials/video-2.mp4"
import video3 from "../assets/Images/testimonials/video-3.mp4"
import video4 from "../assets/Images/testimonials/video-4.mp4"
import video5 from "../assets/Images/testimonials/video-5.mp4"
import video6 from "../assets/Images/testimonials/video-6.mp4"
import video7 from "../assets/Images/testimonials/video-7.mp4"
import video8 from "../assets/Images/testimonials/video-8.mp4"






export const servicesData = [
  { icon: "🌿", title: "Ayurvedic Acupressure", description: "Restore balance with natural pressure points." },
  { icon: "🖐️", title: "Sujok Therapy", description: "Healing through hands and feet stimulation." },
  { icon: "⚕️", title: "Traditional Chinese Medicine", description: "Ancient wisdom for modern health." },
  { icon: "🌸", title: "Naturopathy", description: "Harness the healing power of nature." },
];

export const conditions = [
  "Chronic Pain", "Stress", "Anxiety", "Migraines",
  "Digestive Issues", "Insomnia", "Arthritis", "Back Pain"
];

export const testimonialsData = [
  "After just a few sessions, my migraines disappeared. Truly life-changing experience!",
  "The care and personal attention here are unlike anywhere else. Highly recommend!"
];

export const conditionsData = [
  { title: "Chronic Pain", image: chronicPainImg },
  { title: "Stress", image: stressImg },
  { title: "Anxiety", image: anxietyImg },
  // { title: "Migraines", image: "/images/migraines.jpg" },
  // { title: "Digestive Issues", image: "/images/digestive.jpg" },
  // { title: "Insomnia", image: "/images/insomnia.jpg" },
  // { title: "Arthritis", image: "/images/arthritis.jpg" },
  // { title: "Back Pain", image: "/images/back-pain.jpg" },
];

export const timelineData = [
  {
    year: "2001",
    title: "Masters in Traditional Chinese Medicine",
    description: "Acupressure Shodh, Prashikhan Evam Upchar Sansthan.",
  },
  {
    year: "2002",
    title: "Therapist at Acupressure Hospital",
    description: "Started giving therapy after completing masters.",
  },
  {
    year: "2003",
    title: "Kumbh Mela Camp, Haridwar",
    description: "Provided therapy to thousands of patients.",
  },
  {
    year: "2004",
    title: "Master in Smile & Twist Therapy",
    description: "Under Prof. Park J.Wov, Korea.",
    link: "https://www.sujok.com/about2-c1br6",
  },
  {
    year: "2006",
    title: "Diploma in Naturopathy",
    description: "3-Year diploma, Delhi.",
  },
  {
    year: "2008",
    title: "Research on Ayurvedic Acupressure",
    description:
      "Conducted research in Mumbai, Surat, Chandigarh, Praygraj, and more. Achieved Master in Ayurvedic Acupressure & Sujok.",
  },
  {
    year: "Present",
    title: "24+ Years of Experience",
    description: "Dedicated to holistic healing and patient care.",
  },
];

export const certifications = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
  { image: image5 },
  { image: image6 },
  { image: image7 },
  { image: image8 },
  { image: image9 },
  { image: image10 },
  { image: image11 },


];


export const therapiesData = [
  {
    name: "Ayurvedic Acupressure",
    image: "/assets/images/ayurvedic-acupressure.jpg",
    whatIsIt:
      "A holistic healing technique rooted in Ayurveda that uses pressure points to balance energy flow and restore health.",
    howItWorks:
      "By stimulating specific points on the body, Ayurvedic acupressure enhances circulation, activates natural healing, and restores balance in body organs.",
    treats: ["Chronic Pain", "Digestive Issues", "Stress", "Insomnia", "Back Pain"],
    whatToExpect:
      "A calming session where pressure is applied on different points of your body, promoting relaxation and healing.",

  },
  {
    name: "Sujok Therapy",
    image: "/assets/images/sujok-therapy.jpg",
    whatIsIt:
      "Sujok is a Korean therapy that uses points on the hands and feet to heal corresponding body organs.",
    howItWorks:
      "It works by stimulating microsystems in your palms and soles, restoring energy flow and providing relief.",
    treats: ["Migraines", "Arthritis", "Digestive Issues", "Stress", "Joint Pain"],
    whatToExpect:
      "Gentle stimulation of hand/foot points with tools or seeds, giving fast relief without side effects.",

  },
  {
    name: "Traditional Chinese Medicine (TCM)",
    image: "/assets/images/tcm.jpg",
    whatIsIt:
      "An ancient Chinese healing system based on balancing yin & yang, focusing on meridians and energy flow.",
    howItWorks:
      "Through acupressure, herbal remedies, and breathing techniques, TCM restores balance and strengthens immunity.",
    treats: ["Anxiety", "Digestive Disorders", "Fatigue", "Respiratory Issues"],
    whatToExpect:
      "Relaxing therapy combining acupressure and breathing, customized to your body’s needs.",

  },
  {
    name: "Naturopathy",
    image: "/assets/images/naturopathy.jpg",
    whatIsIt:
      "A natural system of healing that uses diet, lifestyle, and therapies to support the body’s self-healing.",
    howItWorks:
      "By focusing on lifestyle corrections, detox, and therapies like mud packs, hydrotherapy, and acupressure.",
    treats: ["Obesity", "Stress", "Skin Issues", "Chronic Fatigue"],
    whatToExpect:
      "Personalized sessions including dietary suggestions and natural therapies to detoxify your body.",
  },
  {
    name: "Paralysis Acupressure Therapy",
    image: "/assets/images/paralysis-acupressure.jpg",
    whatIsIt:
      "A specialized acupressure therapy focused on improving mobility, nerve stimulation, and blood circulation for individuals affected by paralysis.",
    howItWorks:
      "Targeted pressure is applied on nerve-regenerating and circulation-boosting points to activate muscle function, reduce stiffness, and support nervous system recovery.",
    treats: ["Partial Paralysis", "Stroke Recovery", "Nerve Weakness", "Muscle Stiffness"],
    whatToExpect:
      "Regular sessions aimed at gradual improvement in movement, better blood flow, and enhanced coordination to support recovery.",
  }
];
export const conditionsList = [
  {
    name: "Chronic Pain",
    slug: "chronic-pain",
    image: chronicPainImg,
    shortDescription: "Relieve long-term pain with holistic therapies.",
  },
  {
    name: "Stress",
    slug: "stress",
    image: stressImg,
    shortDescription: "Calm your mind and body naturally.",
  },
  {
    name: "Anxiety",
    slug: "anxiety",
    image: anxietyImg,
    shortDescription: "Find balance and inner peace.",
  },
  {
    name: "Migraines",
    slug: "migraines",
    image: migranesImg,
    shortDescription: "Reduce headache frequency and intensity.",
  },

  {
    name: "Digestive Issues",
    slug: "digestive-issues",
    image: digestiveIssueImg,
    shortDescription: "Support healthy digestion and gut balance.",
  },
  {
    name: "Insomnia",
    slug: "insomnia",
    image: insomaniaImg,
    shortDescription: "Improve sleep quality and restfulness.",
  },
  {
    name: "Arthritis",
    slug: "arthritis",
    image: arthritiesImg,
    shortDescription: "Ease joint pain and improve mobility.",
  },
  {
    name: "Back Pain",
    slug: "back-pain",
    image: backPainImg,
    shortDescription: "Natural relief for acute and chronic back pain.",
  },
  // ... add others
];






export const modalDescription = {
  "Chronic Pain": `
    Chronic pain is often the result of imbalances in the body’s natural energy flow. 
    Our therapies address not just the pain but also the root cause behind it. 
    We use Ayurvedic acupressure and Sujok techniques to stimulate key points 
    that restore harmony between nerves and muscles. 
    Unlike medications that only mask symptoms, our approach focuses on long-term healing. 
    Patients often report a gradual reduction in stiffness and discomfort. 
    With regular sessions, you can expect improved flexibility and mobility. 
    Chronic pain can affect emotional health too, and our holistic treatment 
    supports both physical and mental well-being. 
    Whether it’s back pain, arthritis, or joint stiffness, 
    our methods are safe, non-invasive, and highly effective. 
    This therapy empowers you to live pain-free with improved quality of life.
  `,

  "Stress": `
    Stress has become a part of modern living, but it doesn’t have to control you. 
    Our therapies focus on calming the nervous system naturally. 
    Using Ayurvedic acupressure, we activate points that regulate hormones like cortisol. 
    Sujok therapy helps balance internal organs, reducing tension at the root level. 
    Patients often feel lighter, calmer, and more in control after just a few sessions. 
    Our approach avoids dependency on medication or sedatives. 
    Stress relief through natural methods also improves focus and productivity. 
    Many patients find themselves sleeping better and feeling more energetic. 
    We also guide you with breathing techniques for ongoing self-care. 
    Over time, stress no longer dictates your daily life, giving you peace of mind.
  `,

  "Anxiety": `
    Anxiety can make even simple daily tasks feel overwhelming. 
    Our therapies are designed to bring immediate relief and long-term stability. 
    Acupressure sessions target points that regulate brain activity and calm the mind. 
    Sujok therapy balances emotional energy and reduces restlessness. 
    These treatments help improve sleep, stabilize mood, and reduce panic episodes. 
    Patients often report feeling grounded and more confident after sessions. 
    Unlike medicines that may cause side effects, our methods are safe and natural. 
    Anxiety often arises from both mental and physical imbalances; we address both. 
    A relaxed nervous system improves digestion, immunity, and overall resilience. 
    This holistic care helps you regain control over your thoughts and emotions. 
    Our goal is to help you lead a balanced and fearless life.
  `,

  "Migraines": `
    Migraines can be debilitating, affecting work, family, and quality of life. 
    Our therapy focuses on identifying triggers and rebalancing energy flow. 
    Acupressure stimulates pressure points linked to the nervous and vascular system. 
    Sujok therapy further enhances circulation and reduces tension in the head region. 
    With consistent treatment, the frequency and intensity of migraines decrease. 
    Unlike painkillers, our approach prevents dependency and targets the cause. 
    Patients often report improved sleep patterns and reduced sensitivity to light or sound. 
    Regular therapy can also ease associated symptoms like nausea and fatigue. 
    This non-invasive treatment restores energy balance naturally. 
    Over time, you’ll regain freedom from sudden migraine attacks. 
    Our goal is to let you live without the constant fear of pain.
  `,

  "Digestive Issues": `
    Digestive health is at the core of overall well-being. 
    Imbalances in the stomach, liver, and intestines can lead to chronic problems. 
    Our therapies stimulate digestive organs to function optimally. 
    Acupressure points on the hands and feet regulate metabolism naturally. 
    Sujok therapy balances the digestive energy pathways for smooth functioning. 
    Conditions like acidity, bloating, constipation, and IBS respond well to this treatment. 
    Patients experience relief from discomfort and improved appetite. 
    Our approach avoids harmful side effects of laxatives or antacids. 
    Better digestion also boosts immunity and energy levels. 
    With consistent sessions, your digestive system regains natural rhythm. 
    This therapy helps restore confidence in eating and living freely.
  `,

  "Insomnia": `
    Insomnia often results from stress, anxiety, or poor lifestyle habits. 
    Our therapies focus on calming the nervous system and balancing hormones. 
    Acupressure stimulates points that regulate sleep cycles naturally. 
    Sujok therapy helps release accumulated tension in the body. 
    Patients often report falling asleep faster and staying asleep longer. 
    Unlike sleeping pills, our methods are safe, non-habit forming, and restorative. 
    Improved sleep also boosts concentration and emotional well-being. 
    With therapy, patients wake up refreshed instead of drowsy. 
    This treatment also addresses underlying causes like digestive or hormonal imbalance. 
    Over time, your body rediscovers its natural rhythm for deep, restorative sleep. 
    Sleep becomes a natural, peaceful part of life again.
  `,

  "Arthritis": `
    Arthritis causes stiffness, swelling, and pain that limit daily activities. 
    Our holistic therapies target both pain relief and joint mobility. 
    Acupressure sessions stimulate blood circulation in affected joints. 
    Sujok therapy balances energy flow to reduce inflammation. 
    These methods help ease stiffness and improve range of motion. 
    Patients often experience relief without relying heavily on painkillers. 
    Consistent sessions improve long-term joint flexibility. 
    Natural therapies also prevent side effects of conventional treatments. 
    Improved joint function brings back confidence in daily movement. 
    Over time, patients enjoy better independence and quality of life. 
    Our approach restores not just mobility but also peace of mind.
  `,

  "Back Pain": `
    Back pain is one of the most common issues affecting adults today. 
    Our therapies target spinal alignment and muscular relaxation. 
    Acupressure points stimulate nerves to reduce pain signals naturally. 
    Sujok therapy enhances circulation and releases trapped tension in muscles. 
    Patients often experience immediate relief after sessions. 
    Long-term therapy corrects posture and strengthens the back muscles. 
    Unlike heavy medication, our approach is safe and restorative. 
    Back pain can affect sleep, mood, and energy; we address all aspects holistically. 
    Consistent care prevents recurrence and supports spinal health. 
    Whether it’s acute or chronic back pain, we provide lasting solutions. 
    With therapy, you can return to daily activities with confidence.
  `,
};

export const testimonialsList = [
  {
    name: "Riya Sharma",
    city: "Mumbai",
    text: "After just a few sessions, my migraines disappeared. Truly life-changing experience!",
    video:video1 ,
  },
  {
    name: "Amit Verma",
    city: "Delhi",
    text: "The care and personal attention here are unlike anywhere else. Highly recommend!",
    video: null,
  },
  {
    name: "Sneha Kapoor",
    city: "Bangalore",
    text: "I struggled with chronic back pain for years. This therapy has improved my daily life immensely.",
    video: video2,
  },
  {
    name: "Rohit Singh",
    city: "Chennai",
    text: "Stress used to control my life. Thanks to the therapies here, I feel calm and focused every day.",
    video: video3,
  },
  {
    name: "Priya Nair",
    city: "Kolkata",
    text: "Sujok therapy helped me regain balance and energy. I feel healthier and more active than ever.",
    video: null,
  },
  {
    name: "Vikram Das",
    city: "Hyderabad",
    text: "The holistic approach of this clinic really works. My anxiety has reduced significantly.",
    video: video4,
  },
  {
    name: "Meera Joshi",
    city: "Pune",
    text: "The therapists are very professional. I’ve seen real improvements in my insomnia and overall sleep quality.",
    video: video5,
  },
  {
    name: "Karan Mehta",
    city: "Jaipur",
    text: "Arthritis was affecting my daily routine. After these sessions, my joint mobility has improved a lot.",
    video: video6,
  },
  {
    name: "Ananya Rao",
    city: "Lucknow",
    text: "Digestive issues bothered me for years. With their therapy, I feel lighter and more energetic.",
    video: null,
  },
  {
    name: "Siddharth Jain",
    city: "Ahmedabad",
    text: "I feel calmer, healthier, and stronger after regular sessions. Highly recommend for anyone seeking holistic healing.",
    video: video7,
  },
  {
    name: "Tanvi Gupta",
    city: "Chandigarh",
    text: "The treatments are gentle but effective. My overall wellness has improved beyond expectation.",
    video: video8,
  },
  {
    name: "Rahul Sharma",
    city: "Bhopal",
    text: "A wonderful experience! The therapies helped me tackle both physical and mental fatigue.",
    video: null,
  },
];


export const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Treatments and Services", path: "/TreatmentsAndServices" },
  { name: "Conditions We Treat", path: "/conditionsWeTreat" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact Us", path: "/contact" },
];

export const ABOUT_US_PARAGRAPH = [
  `With a foundation rooted in Traditional Chinese Medicine, Ayurvedic Acupressure, 
  and Sujok Therapy, I have devoted over 24 years to mastering the art and science 
  of holistic healing. My approach emphasizes treating the root causes of health 
  issues rather than merely alleviating symptoms, aiming to restore balance, 
  wellness, and vitality in every patient’s life. Beginning my journey in 2001 
  with a Masters in Traditional Chinese Medicine from Acupressure Shodh, Prashikhan 
  Evam Upchar Sansthan, I quickly immersed myself in clinical practice, providing 
  personalized therapy to patients across diverse health conditions. In 2002, I 
  began working as a therapist at an Acupressure Hospital, where I honed my practical 
  skills and learned to tailor treatments for individual needs. Over the years, I have 
  participated in large-scale healing initiatives such as the Kumbh Mela Camp in 
  Haridwar, treating thousands of patients with dedication and compassion. My 
  professional milestones include mastering Smile & Twist Therapy under Prof. Park J.Wov, 
  Korea, and earning a Diploma in Naturopathy in 2006, which added depth to my 
  understanding of natural healing modalities. I have conducted extensive research 
  in Ayurvedic Acupressure in cities like Mumbai, Surat, Chandigarh, and Prayagraj, 
  leading to a masterful integration of traditional wisdom with modern therapeutic 
  techniques. Throughout my career, I have remained committed to continuous learning, 
  attending workshops, seminars, and advanced courses to expand my expertise and 
  ensure that my patients receive the most effective, evidence-based care. Today, 
  with more than two decades of hands-on experience, I continue to provide holistic 
  treatments that address physical, emotional, and mental well-being. My philosophy 
  centers on compassion, integrity, and personalized care, striving to empower each 
  patient with knowledge, guidance, and therapeutic interventions that restore balance 
  and foster long-term wellness. Whether addressing chronic ailments, stress-related 
  conditions, or general wellness, my mission remains unwavering: to help every 
  patient achieve optimal health, improved quality of life, and renewed hope through 
  natural and holistic healing practices.`
];


