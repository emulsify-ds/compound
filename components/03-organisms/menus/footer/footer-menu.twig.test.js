import { join } from 'path';
import { render, Twig } from 'twig-testing-library';

import loadYaml from '../../../../util/loadYaml';
import { setupTwig, namespaces } from '../../../../.storybook/setupTwig';

setupTwig(Twig);

describe('footer-menu', () => {
  it('can render an footer menu', async () => {
    const { container } = await render(
      join(__dirname, 'footer-menu.twig'),
      loadYaml(join(__dirname, 'footer-menu.yml')),
      namespaces,
    );

    expect(container).toMatchFooterSnapshot(`
      <div>











        <ul
          class="footer-menu"
        >




          <li
            class="footer-menu__item"
          >





            <a
              class="footer-menu__link"
              href="#"
            >

            Test

            </a>


          </li>




          <li
            class="footer-menu__item"
          >





            <a
              class="footer-menu__link"
              href="#"
            >

            Number 2

            </a>


          </li>




          <li
            class="footer-menu__item"
          >





            <a
              class="footer-menu__link"
              href="#"
            >

            Item Number 3

            </a>


          </li>


        </ul>



      </div>
    `);
  });
});
