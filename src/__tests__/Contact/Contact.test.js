import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "../../pages/Contact";

// jest.mock("@emailjs/browser", () => ({
//   sendForm: jest.fn(() => Promise.resolve({ text: "Email sent" })),
// }));

// describe("Contact component", () => {
//   it("should render form fields", () => {
//     render(<Contact />);
//     expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Enter a Message/i)).toBeInTheDocument();
//     expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
//   });

//   it("should submit form when all fields are filled", async () => {
//     render(<Contact />);
//     const nameInput = screen.getByLabelText(/Name/i);
//     const emailInput = screen.getByLabelText(/Email address/i);
//     const messageInput = screen.getByLabelText(/Enter a Message/i);
//     const submitButton = screen.getByRole("button", { name: /submit/i });

//     fireEvent.change(nameInput, { target: { value: "Test User" } });
//     fireEvent.change(emailInput, { target: { value: "test@test.com" } });
//     fireEvent.change(messageInput, {
//       target: { value: "This is a test message" },
//     });
//     fireEvent.click(submitButton);

//     await waitFor(() => {
//       expect(screen.getByText(/Form submitted/i)).toBeInTheDocument();
//       expect(
//         screen.getByRole("button", { name: /close/i })
//       ).toBeInTheDocument();
//     });
//   });

//   it("should display success message when the form is submitted", async () => {
//     const { getByLabelText, getByRole, getByText } = render(<Contact />);

//     fireEvent.input(getByLabelText("Name"), { target: { value: "John Doe" } });
//     fireEvent.input(getByLabelText("Email address"), {
//       target: { value: "johndoe@example.com" },
//     });
//     fireEvent.input(getByLabelText("Enter a Message"), {
//       target: { value: "Hello world!" },
//     });

//     fireEvent.click(getByRole("button", { name: "Submit" }));

//     await waitFor(() => {
//       expect(getByText("Form submitted")).toBeInTheDocument();
//     });

//     fireEvent.click(getByRole("button", { name: "Close" }));

//     expect(screen.queryByText("Form submitted")).not.toBeInTheDocument();
//   });
// });

// Mock the emailjs browser library to return a resolved Promise
jest.mock("@emailjs/browser", () => ({
  sendForm: jest.fn(() => Promise.resolve({ text: "Email sent" })),
}));

describe("Contact component", () => {
  // Test that the form fields are rendered correctly
  it("should render form fields", () => {
    render(<Contact />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Enter a Message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  // Test that the form submits successfully when all fields are filled
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

    // Wait for the success message and close button to be rendered
    await waitFor(() => {
      expect(screen.getByText(/Form submitted/i)).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /close/i })
      ).toBeInTheDocument();
    });
  });

  // Test that the success message is displayed when the form is submitted
  it("should display success message when the form is submitted", async () => {
    const { getByLabelText, getByRole, getByText } = render(<Contact />);

    fireEvent.input(getByLabelText("Name"), { target: { value: "John Doe" } });
    fireEvent.input(getByLabelText("Email address"), {
      target: { value: "johndoe@example.com" },
    });
    fireEvent.input(getByLabelText("Enter a Message"), {
      target: { value: "Hello world!" },
    });

    fireEvent.click(getByRole("button", { name: "Submit" }));

    // Wait for the success message to be rendered
    await waitFor(() => {
      expect(getByText("Form submitted")).toBeInTheDocument();
    });

    fireEvent.click(getByRole("button", { name: "Close" }));

    // Check that the success message is no longer rendered
    expect(screen.queryByText("Form submitted")).not.toBeInTheDocument();
  });
});
