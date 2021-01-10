CREATE TABLE public.products (
  id serial NOT NULL,
  brand text NULL,
  image text NULL,
  "name" text NULL,
  description text NULL,
  price numeric NULL,
  CONSTRAINT product_pk PRIMARY KEY (id)
);

INSERT INTO public.products (brand,image,"name",description,price) VALUES
   ('funko','https://res.cloudinary.com/dhg3ov8qg/image/upload/v1610063651/catalogue/forky_vztdeh.jpg','forky','funko pop forky',13480),
   ('hasbro','https://res.cloudinary.com/dhg3ov8qg/image/upload/v1610063650/catalogue/stormtrooper_r5nvm7.jpg','stormtrooper','figura de accion star wars',9990),
   ('ted','https://res.cloudinary.com/dhg3ov8qg/image/upload/v1610063650/catalogue/bear_l7cpfw.jpg','oso ted','oso de peluche ted',7990);