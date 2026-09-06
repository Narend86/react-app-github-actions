import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
	it('renders successfully', () => {
		const { container } = render(<App />);

		expect(container.firstChild).toBeTruthy();
	});

	it('mounts into the document', () => {
		render(<App />);
                const appElement = document.body.firstElementChild as HTMLElement;

                expect(document.body).toContainElement(appElement);
	});
});


