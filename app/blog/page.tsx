import Pagination from "@/components/Pagination/Pagination";
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página del Blog | mystudio.dev - Desarrollo Web y eCommerce en Chile",
  description: "Explora las últimas noticias y conocimientos en nuestra Página del Blog. Descubre cómo mystudio.dev impulsa la innovación en el desarrollo web y móvil para startups y empresas en Chile.",
  // otros metadatos
};

const Blog = () => {
  // Replace these values with your actual pagination logic
  const currentPage = 1;
  const totalPages = 12;

  return (
    <>
      <Breadcrumb
        pageName="Blog"
        description="Explora nuestras últimas publicaciones y mantente al día con las tendencias y conocimientos más recientes. Descubre cómo mystudio.dev está transformando el panorama digital con contenido relevante y perspicaz."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          {/* Pagination component here */}
          {/* <Pagination currentPage={currentPage} totalPages={totalPages} /> */}
        </div>
      </section>
    </>
  );
};

export default Blog;
