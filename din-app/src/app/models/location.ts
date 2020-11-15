export interface Location {
    id:       number;
    province: string;
    region:   string;
    geocode:  string;
    areatype: string;
    tambon:   null;
    amphoe:   null;
    lat:      number;
    lon:      number;
}