import { render, fireEvent, screen } from "@testing-library/react";
import { vi } from 'vitest';
import UsedLibListScreen from "./screen_usedLibList";

describe("UsedLibListScreen", () => {
  const mockNpmModules = [
    {
      name: "TestModule",
      version: "1.0.0",
      licenses: "MIT",
      repository: "https://github.com/test/module",
    },
  ];

  test("clicking list item opens module repository in new tab", () => {
    // Mock window.open
    const mockWindowOpen = vi.fn();
    window.open = mockWindowOpen;

    render(
      <UsedLibListScreen
        open={true}
        handleClose={() => {}}
        npmModules={mockNpmModules}
      />
    );

    const listItemElement = screen.getByText("TestModule@1.0.0");
    expect(listItemElement).toBeInTheDocument();

    fireEvent.click(listItemElement);

    // Expect window.open to have been called with the correct URL and target
    expect(mockWindowOpen).toHaveBeenCalledWith(
      "https://github.com/test/module",
      "_blank"
    );

  });

  test("closing modal works correctly", () => {
    const mockHandleClose = vi.fn();
    render(<UsedLibListScreen open={true} handleClose={mockHandleClose} npmModules={mockNpmModules} />);

    fireEvent.click(screen.getByTestId("close-btn-lib-list-modal"));

    expect(mockHandleClose).toHaveBeenCalled();
  });
});