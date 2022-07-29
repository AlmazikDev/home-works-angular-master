export interface Education {
  title: string;
  city: string;
  date: {
    start: Date;
    end: Date;
  };
  desc: string;
  university: string;
}

export interface Experience {
  position: string;
  city: string;
  date: {
    start: Date;
    end: Date;
  };
  desc: string;
  company: string;
}

export type Rating = 1 | 2 | 3 | 4 | 5;
