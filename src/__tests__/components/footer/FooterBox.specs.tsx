import {render, screen} from "@testing-library/react";
import FooterBox from "../../../components/footer/FooterBox";

describe("FooterBox", () => {
  it("renders a footer with an image in it", () => {
    const testSrc = "/assets/images/image.png";

    render(<FooterBox image={testSrc} />);

    // Assert that the image is in the document
    const FooterBoxComponent = screen.getByTestId("footer-box");
    expect(FooterBoxComponent).toBeInTheDocument();
  });
});
