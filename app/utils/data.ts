import { Step } from './types';

export const howToSteps = [
  {
    title: 'Choose Your Cause',
    description:
      'Explore verified campaigns and choose the ones closest to your heart.',
    index: 1,
    position: 'bottom-[64px] left-[400px]',
    isReverse: true,
  },
  {
    title: 'Donate Transparently',
    description:
      'Make donations seamlessly using NFTs and TBAs, ensuring your contributions are safely tracked on the blockchain.',
    index: 2,
    position: 'bottom-[280px] left-[500px]',
    isReverse: false,
  },
  {
    title: 'Track the Impact',
    description:
      'Witness how your donations are making a difference with real-time updates and transparent records.',
    index: 3,
    position: 'top-[218px] right-[243px]',
    isReverse: true,
  },
];

export const partners = [
  {
    name: 'Starknet',
    id: 'starknet',
    logo: '/starknet-facecard.svg',
    position: 'top-[80px] left-[50%]',
  },
  {
    name: 'Braavos',
    id: 'braavos',
    logo: '/braavos-facecard.svg',
    position: 'top-[20%] right-[30%]',
  },
  {
    name: 'Bitcoin',
    id: 'bitcoin',
    logo: '/bitcoin-facecard.svg',
    position: 'top-[45%] right-[15%]',
  },
  {
    name: 'Horus Labs',
    id: 'horus-labs',
    logo: '/horuslabs-facecard.svg',
    position: 'bottom-[20%] right-[30%]',
  },
  {
    name: 'Solana',
    id: 'solana',
    logo: '/solana-facecard.svg',
    position: 'bottom-[10%] left-[50%]',
  },
  {
    name: 'Ethereum',
    id: 'ethereum',
    logo: '/eth-facecard.svg',
    position: 'bottom-[20%] left-[30%]',
  },
  {
    name: 'Onlydust',
    id: 'onlydust',
    logo: '/onlydust-facecard.svg',
    position: 'top-[45%] left-[15%]',
  },
  {
    name: 'Argent',
    id: 'argent',
    logo: '/argent-facecard.svg',
    position: 'top-[20%] left-[30%]',
  },
];

export const faqs = [
  {
    question: 'What is Token Giver?',
    answer:
      'Token Giver is a decentralized application designed to revolutionize charity and fundraising. With Token Giver, users can create and manage campaigns by minting unique campaign NFTs, which have Token Bound Accounts (TBA) deployed on them automatically.',
    index: 1,
  },
  {
    question: 'How do NFTs work in fundraising?',
    answer:
      'Token Giver is a decentralized application designed to revolutionize charity and fundraising. With Token Giver, users can create and manage campaigns by minting unique campaign NFTs, which have Token Bound Accounts (TBA) deployed on them automatically.',
    index: 2,
  },
  {
    question: 'What are Token Bound Accounts (TBAs)?',
    answer:
      'Token Giver is a decentralized application designed to revolutionize charity and fundraising. With Token Giver, users can create and manage campaigns by minting unique campaign NFTs, which have Token Bound Accounts (TBA) deployed on them automatically.',
    index: 3,
  },
  {
    question: 'Is my donation safe?',
    answer:
      'Token Giver is a decentralized application designed to revolutionize charity and fundraising. With Token Giver, users can create and manage campaigns by minting unique campaign NFTs, which have Token Bound Accounts (TBA) deployed on them automatically.',
    index: 4,
  },
  {
    question: 'Can I support multiple causes?',
    answer:
      'Token Giver is a decentralized application designed to revolutionize charity and fundraising. With Token Giver, users can create and manage campaigns by minting unique campaign NFTs, which have Token Bound Accounts (TBA) deployed on them automatically.',
    index: 5,
  },
];

export const campaignThemes = [
  {
    name: 'arts-crafts',
    label: 'Arts & Crafts',
  },
  {
    name: 'comics',
    label: 'Comics',
  },
  {
    name: 'community',
    label: 'Community',
  },
  {
    name: 'design',
    label: 'Design',
  },
  {
    name: 'fashion',
    label: 'Fashion',
  },
  {
    name: 'food',
    label: 'Food',
  },
  {
    name: 'film',
    label: 'Film',
  },
];

// <HighlightedText
//           text={step.title}
//           highlight={step?.faintText || ''}
//           className='max-[430px]:text-xl text-2xl font-AgrandirBold mb-3 text-raisin-black'
//           highlightClassName='font-AgrandirRegular'
//         />

export const donorSteps: Step[] = [
  {
    id: 0,
    title: 'Search & Explore Campaigns',
    faintText: 'Explore',
    subtext: 'Browse verified campaigns across various categories.',
    illus: '/steps/donors/step-1.png',
    points: [
      'Use filters such as cause type, location, and urgency to find a campaign that resonates with you.',
      'Review detailed campaign descriptions and updates for transparency.',
    ],
  },
  {
    id: 1,
    title: 'Make a Secure Donation',
    faintText: 'Secure',
    subtext: 'Contribute to a campaign securely through TokenGiver.',
    illus: '/steps/donors/step-2.png',
    points: [
      'Select the amount you wish to donate.',
      'Complete the transaction using crypto or fiat payment options.',
      'Receive a unique NFT as a digital receipt of your donation.',
    ],
  },
  {
    id: 2,
    title: 'Track & Share Your Impact',
    faintText: 'Share',
    subtext: 'Stay connected with your chosen campaign.',
    illus: '/steps/donors/step-3.png',
    points: [
      'View updates from the fundraiser through your Token Bound Account (TBA).',
      'Monitor how your donation is making a difference.',
    ],
  },
];
export const fundraiserSteps: Step[] = [
  {
    id: 0,
    title: 'Set Up Your Campaign',
    faintText: 'Campaign',
    subtext: 'Design your fundraising campaign with ease.',
    illus: '/steps/fundraiser/step-1.png',
    points: [
      'Add campaign details such as title, description, target goal, and timeline.',
      'Upload multimedia assets like images and videos to make your campaign more engaging.',
      'Select a unique NFT design to represent your campaign and activate your Token Bound Account (TBA).',
    ],
  },
  {
    id: 1,
    title: 'Promote Your Campaign',
    faintText: 'Promote',
    subtext: 'Share your campaign to reach more donors.',
    illus: '/steps/fundraiser/step-2.png',
    points: [
      'Use the TokenGiver sharing tools to post your campaign on social media, email, and other platforms.',
      'Engage with the TokenGiver community by featuring your campaign on our trending section.',
    ],
  },
  {
    id: 2,
    title: 'Receive Donations in Real-Time',
    faintText: 'Donations',
    subtext: 'Start receiving secure and traceable donations.',
    illus: '/steps/fundraiser/step-3.png',
    points: [
      'Each donor receives an NFT confirming their contribution.',
      'Funds are stored in your TBA and can be accessed or withdrawn securely.',
    ],
  },
];
