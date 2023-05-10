import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "../../pages/Contact";

// mock the emailjs browser library to return a resolved Promise
jest.mock("@emailjs/browser", () => ({
  sendForm: jest.fn(() => Promise.resolve({ text: "Email sent" })),
}));

describe("Contact component", () => {
  // test that the form fields are rendered correctly
  it("should render form fields", () => {
    render(<Contact />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Enter a Message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  // test that the form submits successfully when all fields are filled
  it("should submit form when all fields are filled", async () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText(/Name/i);
    const emailInput = screen.getByLabelText(/Email address/i);
    const messageInput = screen.getByLabelText(/Enter a Message/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    fireEvent.change(nameInput, { target: { value: "Test User" } });
    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(messageInput, {
      target: { value: "This is a test message" },
    });
    fireEvent.click(submitButton);
  });

  // test that submitting the form opens the modal

  it("submits the form and opens modal", async () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email address/i);
    const messageInput = screen.getByLabelText(/enter a message/i);
    const submitButton = screen.getByText(/submit/i);

    // filling in the form and clicking submit
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Hello, World!" } });
    fireEvent.click(submitButton);

    // wait for the modal to be rendered
    await waitFor(() => {
      const modal = screen.getByTestId("modal");
      expect(modal).toBeInTheDocument();
    });
  });

  // test that the modal closes when the close button is clicked
  it("closes the modal on close button click", async () => {
    render(<Contact />);

    const submitButton = screen.getByText(/submit/i);
    fireEvent.click(submitButton);

    // find the close button and click it
    const closeButton = await screen.findByTestId("close-button");
    fireEvent.click(closeButton);

    // wait for the modal to be removed from the document
    await waitFor(() => {
      const modal = screen.queryByTestId("modal");
      expect(modal).not.toBeInTheDocument();
    });
  });
});
