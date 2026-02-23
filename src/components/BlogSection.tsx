import blogImg1 from "@/assets/blog-1.jpg";
import blogImg2 from "@/assets/blog-2.jpg";
import blogImg3 from "@/assets/blog-3.jpg";

const posts = [
  {
    image: blogImg1,
    title: "Cuidados com a saúde durante as festas de fim de ano",
    excerpt: "As festas de fim de ano são sinônimo de confraternização, excesso de comida, bebida",
    large: true,
  },
  {
    image: blogImg2,
    title: "Dia de Finados e saúde mental: cuidar da mente é também honrar quem amamos",
    excerpt: "O Dia de Finados, celebrado em 2 de novembro, é um momento em que",
  },
  {
    image: blogImg3,
    title: "Novembro Azul: a importância da prevenção e do cuidado com a saúde do homem",
    excerpt: "O mês de novembro é marcado por uma das campanhas de saúde mais importantes",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground italic mb-4">
          Conteúdo que cuida da sua saúde
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-4">
          A Innova também está ao seu lado na hora de informar. Acesse nossos artigos e fique por dentro de dicas de prevenção, bem-estar, qualidade de vida e tudo sobre plano de saúde em Porto Velho.
          <br />
          Informação confiável e acessível, feita para você.
        </p>
        <button className="border border-primary text-primary rounded-lg px-6 py-3 text-sm font-medium hover:bg-primary/5 transition-colors mb-12">
          Ver todas as postagens
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large post */}
          <div className="md:row-span-2 bg-card rounded-xl shadow-sm border border-border overflow-hidden flex flex-col">
            <img src={posts[0].image} alt={posts[0].title} className="w-full h-64 md:h-80 object-cover" />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-foreground text-lg mb-2">{posts[0].title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{posts[0].excerpt}</p>
              <button className="mt-auto bg-foreground text-background rounded-lg px-6 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors self-start">
                Ler mais
              </button>
            </div>
          </div>

          {/* Small posts */}
          {posts.slice(1).map((post) => (
            <div key={post.title} className="bg-card rounded-xl shadow-sm border border-border overflow-hidden flex flex-col">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-foreground mb-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                <button className="mt-auto bg-foreground text-background rounded-lg px-6 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors self-start">
                  Ler mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
