import styles from './Main.module.css';

const cards = [
  {
    id: 1,
    title: 'My Text 1',
    image: 'https://picsum.photos/id/10/300/200',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Nullam vitae dictum enim. Vivamus eu magna et metus imperdiet pharetra nec eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ornare sem. Curabitur convallis urna tellus. Vivamus vel rutrum lacus. Vestibulum id ipsum ut risus tempus auctor at vel massa.'
  },
  {
    id: 2,
    title: 'My Text 2',
    image: 'https://picsum.photos/id/1018/300/200',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Nullam vitae dictum enim. Vivamus eu magna et metus imperdiet pharetra nec eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ornare sem. Curabitur convallis urna tellus. Vivamus vel rutrum lacus. Vestibulum id ipsum ut risus tempus auctor at vel massa.'
  },
  {
    id: 3,
    title: 'My Text 3',
    image: 'https://picsum.photos/id/1015/300/200',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Nullam vitae dictum enim. Vivamus eu magna et metus imperdiet pharetra nec eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ornare sem. Curabitur convallis urna tellus. Vivamus vel rutrum lacus. Vestibulum id ipsum ut risus tempus auctor at vel massa.'
  },
  {
    id: 4,
    title: 'My Text 4',
    image: 'https://picsum.photos/id/1025/300/200',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Nullam vitae dictum enim. Vivamus eu magna et metus imperdiet pharetra nec eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ornare sem. Curabitur convallis urna tellus. Vivamus vel rutrum lacus. Vestibulum id ipsum ut risus tempus auctor at vel massa.'
  },
  {
    id: 5,
    title: 'My Text 5',
    image: 'https://picsum.photos/id/1003/300/200',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Nullam vitae dictum enim. Vivamus eu magna et metus imperdiet pharetra nec eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ornare sem. Curabitur convallis urna tellus. Vivamus vel rutrum lacus. Vestibulum id ipsum ut risus tempus auctor at vel massa.'
  },
];

export default function Main() {
  return (
    <main className={styles.main}>
      {cards.map((card) => (
        <div className={styles.card} key={card.id}>
          <img src={card.image} alt={`Imagem ${card.id}`} />
          <h2>{card.title}</h2>
          <p>{card.text}</p>
        </div>
      ))}
    </main>
  );
}
