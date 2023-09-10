import { PageProps } from "../types";
import InputAnimationWithHTMLCSS from "./InputAnimationWithHTMLCSS";

const Slug = (props: PageProps) => {
  const { page } = props;
  switch (page.slug) {
    case "Input-Animation-With-HTML-&-CSS":
      return <InputAnimationWithHTMLCSS page={page} />;

    default:
      return <div>Page Not Found</div>;
  }
};

export default Slug;
