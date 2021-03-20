import { bibtex, test, checkSame } from './utils';

const input = bibtex`
@book{sweig42,
	title        = {The impossible book},
	author       = {Stefa{n} Sweig},
	year         = 1942,
	month        = mar,
	publisher    = {Dead Poet Society}
}
@book{sweigdd42,
	title        = {The impossible BOOK},
	author       = {Stefa{n} Sweig},
	year         = 1942,
	month        = mar,
	publisher    = {Dead Poet Society},
    n=1
}`;

const output = bibtex`
@book{sweig42,
  title         = {The impossible book},
  author        = {Stefa{n} Sweig},
  year          = 1942,
  month         = mar,
  publisher     = {Dead Poet Society}
}
`;

test('merge duplicates (keep first)', async (t, tidy) => {
	const tidied = await tidy(input, { merge: 'first' });
	const warnings = tidied.warnings.filter((w) => w.code === 'DUPLICATE_ENTRY');
	checkSame(t, tidied.bibtex, output);
	checkSame(t, warnings.length, 1);
});
