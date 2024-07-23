import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render restaurant card component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    // Use debug to print the output and inspect
    screen.debug();

    // Use a flexible text matcher with a regular expression
    const name = screen.getByText((content, element) => {
        return /La Pino'z Pizza/i.test(content);
    });

    expect(name).toBeInTheDocument();
});
