import Card from "@/components/card/Card";
import Navbar from "@/components/navbar/Navbar";

export default function Contact() {
  const data = [
    {
      heading: "Card",
      content: "This is our content",
      image: "/Images/mountain.jpg",
    },
    {
      heading: "Card2",
      content: "This is our content",
      image: "/Images/mountain.jpg",
    },
    {
      heading: "Card3",
      content: "This is our content",
      image: "/Images/mountain.jpg",
    },
    {
      heading: "Card4",
      content: "This is our content",
      image: "/Images/mountain.jpg",
    },
    {
      heading: "Card",
      content: "This is our content",
      image: "/Images/mountain.jpg",
    },
    {
      heading: "Card",
      content: "This is our content",
      image: "/Images/mountain.jpg",
    },
    {
      heading: "Card",
      content: "This is our content",
      image: "/Images/mountain.jpg",
    },
    {
      heading: "Card",
      content: "This is our content",
      image: "/Images/mountain.jpg",
    },
    {
      heading: "Card",
      content: "This is our content",
      image: "/Images/mountain.jpg",
    },
  ];
  return (
    <div>
      <div>Contact Page</div>
      {/* <Card
        heading="Card"
        content="This is our Content"
        image="/Images/mountain.jpg"
      /> */}
      <div className="flex gap-4 flex-wrap items-center justify-center">
        {data.map((i) => (
          <Card
            key={i.image}
            heading={i.heading}
            content={i.content}
            image={i.image}
          />
        ))}
      </div>
      
    </div>
  );
}
