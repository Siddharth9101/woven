const ITEMS = [
  {
    img: "/flowral_pouch/flowral_pouch_01.jpeg",
    title: "Floral Pouch",
    subTitle: "crochet",
  },
  {
    img: "/flowral_pouch/flowral_pouch_02.jpeg",
    title: "Floral Pouch",
    subTitle: "crochet",
  },
  {
    img: "/flowral_pouch/flowral_pouch_03.jpeg",
    title: "Floral Pouch",
    subTitle: "crochet",
  },
  {
    img: "/flowral_pouch/flowral_pouch_04.jpeg",
    title: "Floral Pouch",
    subTitle: "crochet",
  },
  {
    img: "/flowral_pouch/flowral_pouch_05.jpeg",
    title: "Floral Pouch",
    subTitle: "crochet",
  },
  {
    img: "/flowral_pouch/flowral_pouch.png",
    title: "Floral Pouch",
    subTitle: "crochet",
  },
];

const Gallery = () => {
  return (
    <section className="container mb-8">
      <div className="py-2">
        {/* heading & subheading*/}
        <div>
          <h2 className="font-heading text-3xl sm:text-4xl">Gallery</h2>
          <h3 className="font-label text-sm sm:text-md font-light text-muted-brown uppercase py-3">
            Browse The Collection
          </h3>
          <div className="border-b border-light-grey h-0.5" />
        </div>
      </div>

      {/* Items Grid */}
      <div className=" grid gap-6 sm:grid-cols-3 sm:gap-8">
        {ITEMS.map((item, i) => (
          <div key={i} className="flex justify-center">
            <div className="flex flex-col justify-center items-center w-full">
              <div className="w-full aspect-square overflow-hidden rounded-sm mb-2">
                <img
                  src={item.img}
                  alt={item.title}
                  className="size-full object-cover"
                />
              </div>
              <h4 className="font-heading font-semibold tracking-wider text-lg self-start">
                {item.title}
              </h4>
              <span className="font-label font-light text-sm uppercase self-start">
                {item.subTitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
