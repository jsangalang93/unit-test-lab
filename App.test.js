import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders an h1 tag', () => {
    const app = render(<App />);
    const heading = app.getByRole('heading');
    expect(heading).toBeInTheDocument();

});

test('renders a list of todos', () => {
    const app = render(<App />);
    const todos = app.getAllByRole('listitem');
    expect(todos).toHaveLength(3);
}
);

test('renders content of todos', () => {
    const app = render(<App />);
    const todos = app.getAllByRole('listitem');
    expect(todos[0]).toHaveTextContent('dog the walk');
    expect(todos[1]).toHaveTextContent('water the sponge');
    expect(todos[2]).toHaveTextContent('let a candle light me on fire');
}
);

test('deletes a todo', () => {
    const app = render(<App />);
    const todos = app.getAllByRole('listitem');
    expect(todos).toHaveLength(3);
    const deleteButton = todos[0].querySelector('span');
    fireEvent.click(deleteButton);
    const updatedTodos = app.getAllByRole('listitem');
    expect(updatedTodos).toHaveLength(2);
}
);

