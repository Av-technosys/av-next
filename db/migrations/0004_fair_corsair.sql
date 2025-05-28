CREATE TABLE "formsData" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar,
	"email" varchar,
	"message" varchar,
	"number" varchar,
	"slug" varchar,
	"created_at" timestamp DEFAULT now()
);
