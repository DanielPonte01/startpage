// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Daniel',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '-23.5489',
	defaultLongitude: '-46.6388',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
        {
            id: '1',
            name: 'Youtube',
            icon: 'youtube',
            link: 'https://www.youtube.com/',
        },
		{
			id: '2',
			name: 'Instagram',
			icon: 'instagram',
			link: 'https://www.instagram.com/',
		},
		{
			id: '3',
			name: 'Zap',
			icon: 'send',
			link: 'https://web.whatsapp.com/',
		},
		{
			id: '4',
			name: 'github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '5',
			name: 'Twitter',
			icon: 'twitter',
			link: 'https://twitter.com/home',
		},
		{
			id: '6',
			name: 'github',
			icon: 'github',
			link: 'https://github.com/',
		},
	],

	secondButtonsContainer: [
        {
            id: '1',
            name: 'Online Library of Liberty',
            icon: 'book',
        },
        {
            id: '2',
            name: 'Mises',
            icon: 'book',
            link: 'https://mises.org/',
        },
		{
			id: '3',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com/',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'amazon.com.br',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'book',
			id: '1',
			links: [
				{
					name: 'Online Library of Liberty',
                    link: 'https://oll.libertyfund.org/',
				},
                {
                    name: 'Mises',
                    link: 'https://mises.org/',
                },
				{
					name: 'Libgen',
					link: 'http://libgen.rs/',
				},
				{
					name: 'SSRN',
					link: 'https://www.ssrn.com/index.cfm/en/',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Spotify',
					link: 'https://open.spotify.com/',
				},
				{
					name: 'JazzTronica',
					link: 'https://www.dribbble.com',
				},
				{
					name: 'Trello',
					link: 'https://www.trello.com',
				},
				{
					name: 'Slack',
					link: 'https://www.slack.com',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
