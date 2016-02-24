const AppObj = {};

AppObj.communities = [
  {"location":{"coordinates":[-117.83114280000001,33.7174708],"type":"Point"},"name":"Orange County"},
  {"location":{"coordinates":[-121.88632860000001,37.3382082],"type":"Point"},"name":"San Jose"},
  {"location":{"coordinates":[-95.3698028,29.7604267],"type":"Point"},"name":"Houston"},
  {"location":{"coordinates":[-96.79698789999998,32.7766642],"type":"Point"},"name":"Dallas"},
  {"location":{"coordinates":[-122.3320708,47.6062095],"type":"Point"},"name":"Seattle"},
  {"location":{"coordinates":[-84.3879824,33.7489954],"type":"Point"},"name":"Atlanta"},
  {"location":{"coordinates":[-77.4360481,37.5407246],"type":"Point"},"name":"Virginia"},
  {"location":{"coordinates":[-123.12073750000002,49.2827291],"type":"Point"},"name":"Vancouver"},
  {"location":{"coordinates":[-74.00594130000002,40.7127837],"type":"Point"},"name":"New York"}
];

AppObj.businesses = [
    { name: "Restaurants"},
    { name: "Legals"},
    { name: "Medical Offices"},
    { name: "Dental Offices"},
    { name: "Supermarkets"}
];

AppObj.categories = [
    {
		_id: "for-sale",
		name: "forSale",
        subtitle: "forSale-sub",
		image: "/resources/for_sale.png",
        link: "/cat/for-sale"
	},
    
    {
		_id: "hair-nails",
		name: "nails",
        subtitle: "nails-sub",
		image: "/resources/hairNails.png",
        link: "/cat/hair-nails"
	},    
    {
        _id: "housing",
        name: "housing",
        subtitle: "housing-sub",
        image: "/resources/housing.png",
        link: "/cat/housing",
        categories: [
            {
                _id: "house-rent",
                name: "housesForRent",
                subtitle: "housesForRent-sub",
                image: "/resources/housing.png",
                link: "/cat/house-rent"
            },
            {
                _id: "apt-condo-rent",
                name: "aptCondoForRent",
                subtitle: "aptCondoForRent-sub",
                image: "/resources/housing.png",
                link: "/cat/apt-condo-rent"
            },
            {
                _id: "room-rent",
                name: "roomsForRent",
                subtitle: "roomsForRent-sub",
                image: "/resources/housing.png",
                link: "/cat/room-rent"
            },
            {
                _id: "house-for-sale",
                name: "housesForSale",
                subtitle: "housesForSale-sub",
                image: "/resources/housing.png",
                link: "/cat/house-for-sale"
            }
        ]
	},
    {
        _id: "jobs",
        name: "jobs",
        subtitle: "jobs-sub",
        image: "/resources/chef.png",
        link: "/cat/jobs",
        categories: [
            {
                _id: "jobs-work",
                name: "jobsWork",
                subtitle: "jobsWork-sub",
                image: "/resources/chef.png",
                link: "/cat/jobs-work"
            },
            {
                _id: "jobs-household",
                name: "jobsHousehold",
                subtitle: "jobsHousehold-sub",
                image: "/resources/chef.png",
                link: "/cat/jobs-household"
            },
            {
                _id: "jobs-company",
                name: "jobsCompany",
                subtitle: "jobsCompany-sub",
                image: "/resources/chef.png",
                link: "/cat/jobs-company"
            },
            {
                _id: "jobs-office",
                name: "jobsOffice",
                subtitle: "jobsOffice-sub",
                image: "/resources/chef.png",
                link: "/cat/jobs-office"
            },
            {
                _id: "jobs-food",
                name: "jobsFood",
                subtitle: "jobsFood-sub",
                image: "/resources/chef.png",
                link: "/cat/jobs-food"
            },
            {
                _id: "jobs-texttile",
                name: "jobsTexttile",
                subtitle: "jobsTexttile-sub",
                image: "/resources/chef.png",
                link: "/cat/jobs-texttile"
            }
        ]
    },
    
    {
		_id: "automobiles",
		name: "automobiles",
        subtitle: "automobiles-sub",
		image: "/resources/automobiles.png",
        link: "/cat/automobiles"
	},
    
    {
		_id: "opportunities",
		name: "opportunities",
        subtitle: "opportunities-sub",
		image: "/resources/opportunities.png",
        link: "/cat/opportunities"
	},

	{
		_id: "services",
		name: "services",
        subtitle: "services-sub",
		image: "/resources/services.png",
        link: "/cat/services"
	},

	{
		_id: "communities",
		name: "communities",
        subtitle: "communities-sub",
		image: "/resources/community.png",
        link: "/cat/communities"
	},

	{
		_id: "wanted",
		name: "wanted",
        subtitle: "wanted-sub",
		image: "/resources/wanted.png",
        link: "/cat/wanted"
	}
];


export default createAppObj = () => AppObj;