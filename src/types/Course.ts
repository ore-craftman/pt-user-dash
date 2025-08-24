export type Course = {
    id: string;
    title: string;
    price: number;
    active: boolean;
    date_created: string;
    certificate: boolean;
    description: string;
    duration: number; 
    course_type: number;
    link_to_join: string; 
    location: string;
    tutor_pfp: string; 
    tutor_name: string; 
    tutor_title: string; 
    about_tutor: string;
    comments: boolean;
    preview: boolean;
    language: string;
    slots: number;
    session_date: string;
    start_time: string;
    end_time: string;
    average_rating: number;
}


