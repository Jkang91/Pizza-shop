class ContactusController < ApplicationController
  def index
    render json: contactus
  end
end
