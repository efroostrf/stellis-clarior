CREATE TABLE IF NOT EXISTS "post" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"slug" text NOT NULL,
	"is_draft" boolean DEFAULT false NOT NULL,
	"content" json,
	"author" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "post_id_unique" UNIQUE("id"),
	CONSTRAINT "post_title_unique" UNIQUE("title"),
	CONSTRAINT "post_slug_unique" UNIQUE("slug")
);
