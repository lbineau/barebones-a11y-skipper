/**
 * Import
 */
import Skipper from './components/skipper/skipper';

/**
 * Execute
 */
Skipper.init( {
	targetElement: '#a11y-skipper',
	mainId: '#main',
	searchId: '#search',
	menu: [
		{ label: 'Footer', id: '#footer' },
		{ label: 'Sidebar', id: '#sidebar' }
	]
} );
