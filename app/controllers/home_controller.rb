class HomeController < ApplicationController
  def index
    @input = Input.new
  end

  def new
    @input = Input.new
  end

  def create
  end
end
