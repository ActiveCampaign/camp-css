# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "camp-css"
  spec.version       = "0.7.0"
  spec.authors       = ["ActiveCampaign"]
  spec.summary       = %q{CSS behind the distinctive style of ActiveCampaign}
  spec.homepage      = "http://www.activecampaign.com"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0")
  spec.require_paths = ["lib"]

  spec.add_development_dependency 'bundler', '~> 1.5'
  spec.add_development_dependency 'rails', '~> 4.0'
end