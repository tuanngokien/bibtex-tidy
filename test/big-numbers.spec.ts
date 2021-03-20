import tap from 'tap';
import { bibtex, bibtexTidy } from './utils';

const input = bibtex`
@article{blah,
  title={Blah},
  isbn=993320203004020203040583893423432329499585399559303,
  year=2009
}`;

const output = bibtex`
@article{blah,
  title         = {Blah},
  isbn          = 993320203004020203040583893423432329499585399559303,
  year          = 2009
}
`;

tap.test('should not mess up long numbers', async (t) => {
	const tidied = await bibtexTidy(input);
	t.equal(tidied.bibtex, output);
});
