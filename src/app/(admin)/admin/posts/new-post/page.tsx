"use client";

import { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  Save,
  Send,
  Upload,
  Image as ImageIcon,
} from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";
import { PostAction } from "../../../../../../lib/PostAction";
import { uploadImage } from "../../../../../../lib/uploadImage";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const postForm = useRef<HTMLFormElement | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePublish = async () => {
    if (!title.trim() || !content.trim() || !coverImage) {
      alert(
        "Please fill in title, content, and upload a cover image before publishing."
      );
      return;
    }

    setIsPublishing(true);
    // Simulate API call
    setTimeout(() => {
      setIsPublishing(false);
      alert("Post published successfully!");
      // Reset form
      setTitle("");
      setContent("");
      setCoverImage(null);
      setImagePreview(null);
    }, 1000);
  };

  const handleSaveDraft = async () => {
    if (!title.trim() && !content.trim()) {
      alert("Please add some content before saving.");
      return;
    }

    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      alert("Draft saved successfully!");
    }, 1000);
  };

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["blockquote", "code-block"],
      ["link", "image"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "list",
    "bullet",
    "indent",
    "blockquote",
    "code-block",
    "link",
    "image",
  ];

  const HandlePost = async () => {
    if (!postForm.current) return;
    const form = new FormData(postForm.current);
    const content = await ReplaceImageBlob();
    form.append("content", content);
  };

  async function ReplaceImageBlob() {
    const regex = /<img.*?>/g;
    let updatedContent = content;
    try {
      const matchedImage = content.match(regex);
      if (matchedImage) {
        for (const image of matchedImage) {
          const res = await fetch(`/api/posts/`, {
            method: "POST",
            body: image,
          });
          const data = await res.json();
          if (data.success) {
            const newImage = `<img src="${data.url}" alt="${data.url}" />`;
            updatedContent = updatedContent.replace(image, newImage);
          } else {
            console.log(data.error);
          }
        }
        setContent(updatedContent);
        return content;
      } else {
        throw new Error("No matches found");
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unexpected event occured");
      }
    }
  }

  return (
    <div className="ml-[15%] px-6 w-[85%] bg-gray-50 min-h-screen py-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/admin/posts"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors font-inter"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back to Posts</span>
        </Link>
        <div className="h-6 w-px bg-gray-300"></div>
        <h1 className="text-2xl font-semibold text-gray-900 font-inter">
          Create New Post
        </h1>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
            <h2 className="text-sm font-semibold text-gray-900 mb-2 font-inter">
              Post Details
            </h2>
            <p className="text-xs text-gray-600 font-inter">
              Create engaging content for your audience
            </p>
          </div>

          {/* Form Content */}
          <form className="p-8 space-y-8" ref={postForm}>
            {/* Title Input */}
            <div className="space-y-3">
              <label
                htmlFor="title"
                className="block text-xs font-medium text-gray-700 font-inter"
              >
                Post Title *
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a compelling title for your post..."
                className="w-full text-xs px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 font-inter"
                name="title"
              />
              <p className="text-xs text-gray-500 font-inter">
                {title.length}/100 characters
              </p>
            </div>

            {/* Cover Image Upload */}
            <div className="space-y-3">
              <label className="block text-xs font-medium text-gray-700 font-inter">
                Cover Image *
              </label>
              <div className="space-y-4">
                {/* Image Preview */}
                {imagePreview && (
                  <div className="relative">
                    <img
                      src={imagePreview}
                      alt="Cover preview"
                      className="w-full h-48 object-cover rounded-lg border border-gray-200"
                    />
                    <button
                      onClick={() => {
                        setCoverImage(null);
                        setImagePreview(null);
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                )}

                {/* Upload Area */}
                <div className="relative">
                  <input
                    type="file"
                    id="coverImage"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    name="image"
                  />
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="p-3 bg-gray-100 rounded-full">
                        <ImageIcon className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 font-inter">
                          {coverImage
                            ? "Change Cover Image"
                            : "Upload Cover Image"}
                        </p>
                        <p className="text-xs text-gray-500 font-inter mt-1">
                          Click to browse or drag and drop
                        </p>
                        <p className="text-xs text-gray-400 font-inter">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Editor */}
            <div className="space-y-3">
              <label className="block text-xs font-medium text-gray-700 font-inter">
                Post Content *
              </label>
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  modules={quillModules}
                  formats={quillFormats}
                  placeholder="Write your post content here..."
                  style={{
                    height: "400px",
                    backgroundColor: "white",
                  }}
                />
                {/* <input type="text" value={content} readOnly name="content" /> */}
              </div>
              <p className="text-xs text-gray-500 font-inter">
                {content.replace(/<[^>]*>/g, "").length} characters
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleSaveDraft}
                  disabled={isSaving || isPublishing}
                  className="flex text-xs items-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-inter"
                >
                  <Save className="w-3 h-3" />
                  {isSaving ? "Saving..." : "Save as Draft"}
                </button>
              </div>

              <button
                disabled={
                  isPublishing ||
                  isSaving ||
                  !title.trim() ||
                  !content.trim() ||
                  !coverImage
                }
                type="button"
                className="cursor-pointer flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r bg-primary text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-inter text-xs shadow-sm"
                onClick={ReplaceImageBlob}
              >
                <Send className="w-3 h-3" />
                {isPublishing ? "Publishing..." : "Publish Post"}
              </button>
            </div>
          </form>
        </div>

        {/* Preview Section */}
        {(title || content || imagePreview) && (
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-8 py-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
              <h3 className="text-lg font-semibold text-gray-900 font-inter">
                Preview
              </h3>
            </div>
            <div className="p-8">
              {/* Cover Image Preview */}
              {imagePreview && (
                <div className="mb-6">
                  <img
                    src={imagePreview}
                    alt="Cover preview"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              )}

              {title && (
                <h1 className="text-2xl font-bold text-gray-900 mb-4 font-inter">
                  {title}
                </h1>
              )}
              {content && (
                <div
                  className="prose prose-sm max-w-none text-gray-700 font-inter"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewPost;
