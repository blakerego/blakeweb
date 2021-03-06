class ImageUploader < CarrierWave::Uploader::Base
  include CarrierWaveDirect::Uploader
  
  include CarrierWave::RMagick

  # Include the Sprockets helpers for Rails 3.1+ asset pipeline compatibility:
  # include Sprockets::Helpers::RailsHelper
  # include Sprockets::Helpers::IsolatedHelper

  storage :fog

  def extension_white_list
    %w(png jpg jpeg gif bmp)
  end


  # include CarrierWave::MimeTypes
  # process :set_content_type

  # def store_dir
  #   "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  # end

  # version :thumb do
  #   process resize_to_fill: [200, 200]
  # end
end