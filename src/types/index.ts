export type Artwork = {
  id: number;
  title: string;
  api_model: string;
  api_link: string;
  is_boosted: boolean;
  alt_title: string | null;
  thumbnail: {
    lqip: string;
    width: number;
    height: number;
    alt_text: string;
  };
  main_reference_number: string;
  has_not_been_viewed_much: boolean;
  boost_rank: number | null;
  date_start: number;
  date_end: number;
  date_display: string;
  date_qualifier_title: string;
  date_qualifier_id: number | null;
  artist_display: string;
  place_of_origin: string;
  description: string | null;
  short_description: string | null;
  dimensions: string;
  dimensions_details: [
    {
      depth: number | null;
      width: number | null;
      height: number | null;
      diameter: number | null;
      clarificaion: string | null;
    },
  ];
  medium_display: string;
  inscriptions: string;
  credit_line: string;
  catalogue_display: string | null;
  publication_history: string | null;
  exhibition_history: string | null;
  provenance_text: string;
  edition: string | null;
  publishing_verification_level: string;
  internal_department_id: number;
  fiscal_year: number;
  fiscal_year_deaccession: number | null;
  is_public_domain: boolean;
  is_zoomable: boolean;
  max_zoom_window_size: number;
  copyright_notice: string;
  has_multimedia_resources: boolean;
  has_educational_resources: boolean;
  has_advanced_imaging: boolean;
  colorfulness: number;
  color: {
    h: number;
    l: number;
    s: number;
    percentage: number;
    population: number;
  };
  latitude: number | null;
  longitude: number | null;
  latlon: string | null;
  is_on_view: boolean;
  on_loan_display: string | null;
  gallery_title: string | null;
  gallery_id: number | null;
  nomisma_id: string | null;
  artwork_type_title: string;
  artwork_type_id: number;
  department_title: string;
  department_id: string;
  artist_id: number;
  artist_title: string;
  alt_artist_ids: [];
  artist_ids: number[];
  artist_titles: string[];
  category_ids: string[];
  category_titles: string[];
  term_titles: string[];
  style_id: number | null;
  style_title: string | null;
  alt_style_ids: [];
  style_ids: number[];
  style_titles: string[];
  classification_id: string;
  classification_title: string;
  alt_classification_ids: string[];
  classification_ids: string[];
  classification_titles: string[];
  subject_id: null;
  alt_subject_ids: [];
  subject_ids: [];
  subject_titles: [];
  material_id: null;
  alt_material_ids: [];
  material_ids: [];
  material_titles: [];
  technique_id: null;
  alt_technique_ids: [];
  technique_ids: [];
  technique_titles: [];
  theme_titles: [];
  image_id: string;
  alt_image_ids: [];
  document_ids: [];
  sound_ids: [];
  video_ids: [];
  text_ids: [];
  section_ids: [];
  section_titles: [];
  site_ids: [];
  suggest_autocomplete_all: [
    {
      input: string[];
      weight?: number;
      contexts: {
        groupings: string[];
      };
    },
  ];
  source_updated_at: string;
  updated_at: string;
  timestamp: string;
};

export type ArtworksResponse = {
  pagination: {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
    next_url: string;
  };
  data: Artwork[];
};

export type ArtworkResponse = {
  data: Artwork;
};
