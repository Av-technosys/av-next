CREATE TABLE "blogForm" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar,
	"email" varchar,
	"message" varchar,
	"number" varchar,
	"created_at" timestamp DEFAULT now()
);
