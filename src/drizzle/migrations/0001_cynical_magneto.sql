ALTER TABLE "post" RENAME TO "posts";--> statement-breakpoint
ALTER TABLE "posts" DROP CONSTRAINT "post_id_unique";--> statement-breakpoint
ALTER TABLE "posts" DROP CONSTRAINT "post_title_unique";--> statement-breakpoint
ALTER TABLE "posts" DROP CONSTRAINT "post_slug_unique";--> statement-breakpoint
ALTER TABLE "posts" ADD CONSTRAINT "posts_id_unique" UNIQUE("id");--> statement-breakpoint
ALTER TABLE "posts" ADD CONSTRAINT "posts_title_unique" UNIQUE("title");--> statement-breakpoint
ALTER TABLE "posts" ADD CONSTRAINT "posts_slug_unique" UNIQUE("slug");