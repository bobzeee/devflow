import { model, models, Schema, Types } from "mongoose";

export interface IVote {
  author: Types.ObjectId;
  id: Types.ObjectId;
  type: "Question" | "Answer";
  voteType: "Upvote" | "Downvote";
}

const VoteSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    id: { type: Schema.Types.ObjectId, required: true },
    type: { type: String, enum: ["Question", "Answer"], required: true },
    voteType: { type: String, enum: ["Upvote", "Downvote"], required: true },
  },
  { timestamps: true }
);

const Vote = models?.Vote || model<IVote>("Vote", VoteSchema);

export default Vote;
