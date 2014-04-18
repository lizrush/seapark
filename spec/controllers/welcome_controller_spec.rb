require "spec_helper"

describe WelcomeController do
  describe "GET #index" do
    it "responds successfully with an HTTP 200 status code" do
      get :index
      expect(response).to be_success
      expect(response.status).to eq(200)
    end

    it "renders the index template" do
      get :index
      expect(response).to render_template("index")
    end
  end

  describe "GET #about" do
    it "responds successfully with an HTTP 200" do
      get :about
      response.should render_template(:partial => '_about')
    end
  end

  describe "GET #help" do
    it "responds successfully with an HTTP 200" do
      get :help
      response.should render_template(:partial => '_help')
    end
  end
end
