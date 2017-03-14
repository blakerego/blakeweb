CarrierWave.configure do |config|
     config.fog_credentials = {
          provider: "AWS",
          aws_access_key_id: ENV["BLAKEWEB_AWS_ACCESS_KEY_ID"],
          aws_secret_access_key: ENV["BLAKEWEB_AWS_SECRET_ACCESS_KEY"],
          region: ENV["BLAKEWEB_AWS_REGION"]
     }
     config.fog_directory = ENV["BLAKEWEB_S3_BUCKET"]
end