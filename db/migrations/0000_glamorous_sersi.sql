CREATE TABLE "blog" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar NOT NULL,
	"meta_description" varchar NOT NULL,
	"blog_category" varchar NOT NULL,
	"image" varchar NOT NULL,
	"tags" varchar[],
	"date" varchar NOT NULL,
	"data" varchar NOT NULL,
	"user_image" varchar,
	"user_name" varchar,
	"is_visible" boolean DEFAULT true NOT NULL
);
