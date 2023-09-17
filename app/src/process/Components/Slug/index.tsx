import { PageProps } from "../types";
import InputAnimationWithHTMLCSS from "./InputAnimationWithHTMLCSS";
import LoginForm from "./LoginForm";
import NavMenuBottom from "./NavMenuBottom";

const Slug = (props: PageProps) => {
  const { page } = props;
  switch (page.slug) {
    case "Input-Animation-With-HTML-&-CSS":
      return <InputAnimationWithHTMLCSS page={page} />;
    case "login-form":
      return <LoginForm page={page} />;
    case "nav-menu-bottom":
      return <NavMenuBottom page={page} />;
    default:
      return <div>Page Not Found</div>;
  }
};

export default Slug;
